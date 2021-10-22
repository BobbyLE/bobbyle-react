import { ref, push, child, update, get, orderByChild} from 'firebase/database'
import database from '../../firebase/firebase';


//ADD_ARTICLE
export const addArticle = (article) => ({
  type: 'ADD_ARTICLE',
  article
});

export const startAddArticle = (articleData = {}) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const {
        title = '',
        categoryId = '',
        body = '',
        published = false
      } = articleData;
      const article = { 
        title, 
        categories : {
          [categoryId]: true
        },
        body,
        published
      };
  
      // Generate new push ID for the new article
      // const newArticleKey = database.ref(`users/${uid}`).child('articles').push().key;
      const newArticleKey = push(child(ref(database), `users/${uid}/articles`)).key
  
      // Write the new article's data simultaneously in the articles list and the category's article list
      const updates = {};
      updates[`users/${uid}/categories/${categoryId}/articles/${newArticleKey}`] = true;
      updates[`users/${uid}/articles/${newArticleKey}`] = article;
  
      await update(ref(database), updates)
      return dispatch(addArticle({
        id: newArticleKey,
        ...article
      }));
    } catch(error) {
      console.log(error)
    }
  };
};

// EDIT_ARTICLE
export const editArticle =  (id, updates) => ({
  type: 'EDIT_ARTICLE',
  id,
  updates
})

export const startEditArticle = (id, article) => {
  const updatedArticle = {
    title: article.title,
    categories: {
      [article.categoryId]: true
    },
    body: article.body,
    published: article.published
  }
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      
      //Edit article and simultaneously remove article from the old categories and add to new categories
      const updates = {}
      //Update article
      updates[`users/${uid}/articles/${id}`] = updatedArticle;
      //Remove article ID in each categories
      const snapshot = await get(ref(database, `users/${uid}/categories`), orderByChild('articles'))
      snapshot.forEach( (childSnapshot) => {
        const key = childSnapshot.key;
        const val = childSnapshot.val();
        if(val.articles) {
          if(id in val.articles) {
            updates[`users/${uid}/categories/${key}/articles/${id}`] = null;  
          }
        }
      });
      // Add article id to category articles list
      updates[`users/${uid}/categories/${article.categoryId}/articles/${id}`]  = true
      //Finally Query update
      await update(ref(database), updates)
      return dispatch(editArticle(id, article));
    } catch(error) {
      console.log(error)
    }
  };
};


// REMOVE_ARTICLE
export const removeArticle = ({id} = {}) => ({
  type: 'REMOVE_ARTICLE',
  id
});
export const startRemoveArticle = ({id} = {}) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      // Remove both articles and category articles
      const updates = {}
      // Remove the article item
      updates[`users/${uid}/articles/${id}`] = null;
      const snapshot = await get(ref(database, `users/${uid}/categories`), orderByChild('articles'))
      snapshot.forEach( (childSnapshot) => {
        const key = childSnapshot.key;
        const val = childSnapshot.val();
        if(val.articles) {
          if(id in val.articles) {
            // Add updates to remove articles in each categories
            updates[`users/${uid}/categories/${key}/articles/${id}`] = null;  
          }
        }
      });
      //Finally Query update delete
      await update(ref(database), updates)
      return dispatch(removeArticle({id}));
    } catch (error) {
      console.log(error)
    }
  } 
};

// SET_ARTICLES
export const setArticles = (articles) => ({
  type: 'SET_ARTICLES',
  articles
});

export const startSetArticles = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid ? getState().auth.uid : process.env.USER_ID;
      const articlesRef = ref(database, `users/${uid}/articles`)
      const getArticles = await get(articlesRef)
      const articles = [];
      getArticles.forEach(childSnapshot => {
        articles.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        });
      });
      dispatch(setArticles(articles));
    } catch (error) {
      console.log(error)
    }
  }
}