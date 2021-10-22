import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Foundation from 'foundation-sites';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetCategories } from './actions/admin/categories-action';
import { startSetArticles } from './actions/admin/articles-action';
import { startSetWorks } from './actions/admin/works-action';
import { login, logout } from './actions/admin/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { googleAuthProvider } from './firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

import LoadingPage from './components/pages/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'), () => {
      hasRendered = true;
    });
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

onAuthStateChanged(googleAuthProvider, (user) => {
  if (user) {
    store.dispatch(login(user));
    store.dispatch(startSetArticles());
    store.dispatch(startSetCategories());
    store.dispatch(startSetWorks()).then( () => {
      renderApp();
      if (history.location.pathname === '/admin') {
        history.push('/admin/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetArticles());
    store.dispatch(startSetCategories());
    store.dispatch(startSetWorks()).then( () => {
      renderApp();
    });
  }
});
