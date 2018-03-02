import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import categoriesReducer from '../reducers/categories-reducer';
import articlesReducer from '../reducers/articles-reducer';
import worksReducer from '../reducers/works-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      categories: categoriesReducer,
      articles: articlesReducer,
      works: worksReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
