import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ref, push, child, update, get, remove, set } from 'firebase/database'
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { googleAuthProvider } from '../../../firebase/firebase'
import { 
  addCategory, 
  startAddCategory, 
  editCategory, 
  startEditCategory, 
  removeCategory, 
  startRemoveCategory, 
  setCategories, 
  startSetCategories 
} from '../../../actions/admin/categories-action';
import categories from '../../fixtures/categories-fixtures';
import database from '../../../firebase/firebase';


const uid = process.env.USER_ID;
const createMockStore = configureMockStore([thunk]);
const login = process.env.FIREBASE_LOGIN
const password = process.env.FIREBASE_PASSWORD
const defaultAuthState = { auth: { uid } };

// @todo: Too much calls firebase

// beforeEach((done) => {
//   signInWithEmailAndPassword(googleAuthProvider, login, password)
//   .then(() => {
//     const categoriesData = {};
//     categories.forEach(({id, name}) => {
//       categoriesData[id]= { name };
//     });
//     return set(ref(database, `users/${uid}/categories`), categoriesData)
//       .then(() => done())
//       .catch(error => console.log(error))
//   })
// })

// ADD_CATEGORY
test('should setup add category action object with provided values', () => {
  const action  = addCategory(categories[2]);
  expect(action).toEqual({
    type: 'ADD_CATEGORY',
    category: categories[2]
  });
});

// test('should add category to database and store', (done) => {
//   const store = createMockStore(defaultAuthState);
//   const categoryData = {
//     name: 'photography'
//   };
//   store.dispatch(startAddCategory(categoryData)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'ADD_CATEGORY',
//       category: {
//         id: expect.any(String),
//         ...categoryData
//       }
//     });
//     return get(ref(database, `users/${uid}/categories/${actions[0].category.id}`))
//   }).then((snapshot) => {
//     expect(snapshot.val()).toEqual(categoryData);
//     done();
//   });
// });

// EDIT_CATEGORY
test('should setup edit category action object', () => {
  const action  = editCategory('123', { name: 'yolo'} );
  expect(action).toEqual({
    type: 'EDIT_CATEGORY',
    id: '123',
    updates: { name: 'yolo' }
  });
});

// test('should edit category from firebase given id', (done) => {
//   const store = createMockStore(defaultAuthState);
//   const id = categories[1].id;
//   const updates = { name: 'Category name change' };
//   store.dispatch(startEditCategory(id, updates)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type:'EDIT_CATEGORY',
//       id,
//       updates
//     });
//     return get(ref(database, `users/${uid}/categories/${id}`))
//   }).then((snapshot) => {
//     expect(snapshot.val().name).toBe(updates.name);
//     done();
//   });
// })

// REMOVE CATEGORY
test('should setup remove category action object', () => {
  const action = removeCategory({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_CATEGORY',
    id: '123abc'
  })
})

// test('should remove category from firebase given id', (done) => {
//   const store = createMockStore(defaultAuthState);
//   const id = categories[1].id;
//   store.dispatch(startRemoveCategory({ id }))
//     .then(()=> {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: 'REMOVE_CATEGORY',
//         id
//       });
//       return get(ref(database, `users/${uid}/categories/${id}`))
//     }).then((snapshot) => {
//       expect(snapshot.val()).toBeFalsy();
//       done();
//     });
// });

// SET_CATEGORIES
test('should setup set categories action object with data', () => {
  const action = setCategories(categories);
  expect(action).toEqual({
    type: 'SET_CATEGORIES',
    categories
  });
});

// test('should fetch the categories from firebase', (done) => {
//   const store = createMockStore(defaultAuthState);
//   store.dispatch(startSetCategories()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'SET_CATEGORIES',
//       categories
//     });
//     done();
//   });
// });
