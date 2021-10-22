import database from '../../firebase/firebase';
import { ref, push, child, update, get, remove, set } from 'firebase/database'

//ADD_CATEGORIES
export const addCategory = (category) => ({
  type: 'ADD_CATEGORY',
  category
});

export const startAddCategory = (categoryData = {}) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const {
        name = ''
      } = categoryData;
      const category = { name };
  
      const newCatKey = push(child(ref(database), `users/${uid}/categories`)).key
      await update(ref(database, `users/${uid}/categories/${newCatKey}`), category)
      return dispatch(addCategory({
        id: newCatKey,
        ...category
      }));
    } catch (error) {
      console.log(error)
    }
  };
};

// REMOVE_CATEGORY
export const removeCategory = ({ id } = {}) => ({
  type: 'REMOVE_CATEGORY',
  id
});

export const startRemoveCategory = ({id} = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    try {
      await remove(ref(database, `users/${uid}/categories/${id}`))
      return dispatch(removeCategory({ id }))
    } catch (error) {
      console.log(error)
    }
  } 
};

// EDIT_CATEGORY
export const editCategory =  (id, updates) => ({
  type: 'EDIT_CATEGORY',
  id,
  updates
})

export const startEditCategory = (id, updates) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      await set(ref(database, `users/${uid}/categories/${id}`), updates)
      return dispatch(editCategory(id, updates));
    } catch (error) {
      console.log(error)
    }
  };
};

//SET_CATEGORIES
export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories
});

export const startSetCategories = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid ? getState().auth.uid : process.env.USER_ID;
      const categoriesRef = ref(database, `users/${uid}/categories`)
      const getCategories = await get(categoriesRef)
      const categories = []
      getCategories.forEach( (childSnapshot) => {
        categories.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        });
      });
      return dispatch(setCategories(categories));
    } catch(error) {
      console.log(error)
    }
  }
}