import uuid from 'uuid';
import database, { storage } from '../../firebase/firebase';

//ADD_CATEGORIES
export const addWork = (work) => ({
  type: 'ADD_WORK',
  work
});

export const startAddWork = (workData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      tags = '',
      img = '',
      imgURL = ''
    } = workData;
    const work = { title, tags, img, imgURL };

    return database.ref(`users/${uid}/works`).push(work).then((ref) => {
      dispatch(addWork({
        id: ref.key,
        ...work
      }));
    });
  };
};

// REMOVE_CATEGORY
export const removeWork = ({ id } = {}) => ({
  type: 'REMOVE_WORK',
  id
});
export const startRemoveWork = ({id, img} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    storage.ref(`works/${img}`).delete().catch((error) => {
      console.log(error);
    });
    return database.ref(`users/${uid}/works/${id}`).remove().then(()=> {
      dispatch(removeWork({ id }));
    });
  } 
};


// EDIT_WORK
export const editWork =  (id, updates) => ({
  type: 'EDIT_WORK',
  id,
  updates
})

export const startEditWork = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/works/${id}`).update(updates).then(() => {
      return dispatch(editWork(id, updates));
    });
  };
};

//SET_WORKS
export const setWorks = (works) => ({
  type: 'SET_WORKS',
  works
});

export const startSetWorks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid ? getState().auth.uid : process.env.USER_ID;
    return database.ref(`users/${uid}/works`).once('value').then( (snapshot) => {
      const works = [];
      snapshot.forEach( (childSnapshot) => {
        works.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        });
      });
      dispatch(setWorks(works));
    });
  }
}