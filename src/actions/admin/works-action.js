import uuid from 'uuid';
import { ref as refDB, push, child, update, get, remove, set } from 'firebase/database'
import { ref as refStorage, deleteObject } from 'firebase/storage'
import database, { storage } from '../../firebase/firebase';

//ADD_CATEGORIES
export const addWork = (work) => ({
  type: 'ADD_WORK',
  work
});

export const startAddWork = (workData = {}) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const {
        title = '',
        tags = '',
        img = '',
        imgURL = '',
        url = ''
      } = workData;
      const work = { title, tags, img, imgURL, url };
  
      const newWorkKey = push(child(refDB(database), `users/${uid}/works`)).key
      await update(refDB(database, `users/${uid}/works/${newWorkKey}`), work)
      return dispatch(addWork({
        id: newWorkKey,
        ...work
      }));
    } catch (error) {
      console.log(error)
    } 
  };
};

// REMOVE_CATEGORY
export const removeWork = ({ id } = {}) => ({
  type: 'REMOVE_WORK',
  id
});

export const startRemoveWork = ({id, img} = {}) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid
      const storageRef = refStorage(storage, `works/${img}`)

      await deleteObject(storageRef)
      await remove(refDB(database, `users/${uid}/works/${id}`))

      return dispatch(removeWork({ id }))
    } catch (error) {
      console.log(error)
    }
  }
};

// EDIT_WORK
export const editWork =  (id, updates) => ({
  type: 'EDIT_WORK',
  id,
  updates
})

export const startEditWork = (id, updates) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      await set(refDB(database, `users/${uid}/works/${id}`), updates)
      return dispatch(editWork(id, updates));
    } catch(error) {
      console.log(error)
    }
  };
};

//SET_WORKS
export const setWorks = (works) => ({
  type: 'SET_WORKS',
  works
});

export const startSetWorks = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid ? getState().auth.uid : process.env.USER_ID;
      const worksRef = refDB(database, `users/${uid}/works`)
      const getWorks = await get(worksRef)
      const works = []
      getWorks.forEach( (childSnapshot) => {
        works.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        });
      });
      works.reverse();
      return dispatch(setWorks(works))
    } catch (error) {
      console.log(error)
    }
  }
}