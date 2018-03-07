import database from '../../firebase/firebase';


//ADD_ARTICLE
export const addArticle = (article) => ({
  type: 'ADD_ARTICLE',
  article
});

export const startAddArticle = (articleData = {}) => {
  return (dispatch, getState) => {
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
    const newArticleKey = database.ref(`users/${uid}`).child('articles').push().key;

    // Write the new article's data simultaneously in the articles list and the category's article list
    let updates = {};
    updates[`users/${uid}/categories/${categoryId}/articles/${newArticleKey}`] = true;
    updates[`users/${uid}/articles/${newArticleKey}`] = article;

    return database.ref().update(updates).then(() => {
      dispatch(addArticle({
        id: newArticleKey,
        ...article
      }));
    });
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    //Edit article and simultaneously remove article from the old categories and add to new categories
    let updates = {}
    //Update article
    updates[`users/${uid}/articles/${id}`] = updatedArticle;
    //Remove article ID in each categories
    database.ref(`users/${uid}/categories`).orderByChild('articles')
      .once('value')
      .then((snapshot) => {
        snapshot.forEach( (childSnapshot) => {
          const key = childSnapshot.key;
          const val = childSnapshot.val();
          if(val.articles) {
            if(id in val.articles) {
              updates[`users/${uid}/categories/${key}/articles/${id}`] = null;  
            }
          }
        });
      }).then( () => {
        // Add article id to category articles list
        updates[`users/${uid}/categories/${article.categoryId}/articles/${id}`]  = true
        //Finally Query update
        return database.ref().update(updates).then(() => {
          return dispatch(editArticle(id, article));
        });
      })
  };
};


// REMOVE_ARTICLE
export const removeArticle = ({id} = {}) => ({
  type: 'REMOVE_ARTICLE',
  id
});
export const startRemoveArticle = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // Remove both articles and category articles
    let updates = {}
    // Remove the article item
    updates[`users/${uid}/articles/${id}`] = null;
    database.ref(`users/${uid}/categories`).orderByChild('articles')
      .once('value')
      .then((snapshot) => {
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
      }).then( () => {
        //Finally Query update delete
        return database.ref().update(updates).then(() => {
          return dispatch(removeArticle({id}));
        });
      })
  } 
};

// SET_ARTICLES
export const setArticles = (articles) => ({
  type: 'SET_ARTICLES',
  articles
});

export const startSetArticles = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid ? getState().auth.uid : process.env.USER_ID;
    return database.ref(`users/${uid}/articles`).once('value').then( (snapshot) => {
      const articles = [];
      snapshot.forEach( (childSnapshot) => {
        articles.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        });
      });
      dispatch(setArticles(articles));
    });
  }
}