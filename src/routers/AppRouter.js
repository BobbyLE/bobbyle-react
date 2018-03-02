import React from 'react';
import { Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ShadowWrapper from 'react-shadow-wrapper';

//Admin
import DashboardPage from '../components/admin/DashboardPage';
import CategoriesPage from '../components/admin/blog/categories/CategoriesPage';
import EditCategoryPage from '../components/admin/blog/categories/EditCategoryPage';
import ArticlesPage from '../components/admin/blog/articles/ArticlesPage';
import AddArticlePage from '../components/admin/blog/articles/AddArticlePage';
import EditArticlePage from '../components/admin/blog/articles/EditArticlePage';
import AdminWorksPage from '../components/admin/work/WorksPage';
import AddWorkPage from '../components/admin/work/AddWorkPage';
import EditWorkPage from '../components/admin/work/EditWorkPage';
//Front
import AboutPage from '../components/pages/AboutPage';
import WorkPage from '../components/pages/WorkPage';
import BlogPage from '../components/pages/BlogPage';
import ContactPage from '../components/pages/ContactPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/admin/LoginPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FrontRoute from './FrontRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Redirect from="/" to="/about" component={AboutPage} exact={true} />
      <FrontRoute path="/about" component={AboutPage} exact={true} />
      <FrontRoute path="/work" component={WorkPage} exact={true} />
      {/*<FrontRoute path="/blog" component={BlogPage} />*/}
      <FrontRoute path="/contact" component={ContactPage} exact={true} />

      <PublicRoute path="/admin" component={LoginPage} exact={true} />
        <PrivateRoute path="/admin/dashboard" component={DashboardPage} />
        <PrivateRoute path="/admin/categories" component={CategoriesPage} exact={true} />
          <PrivateRoute path="/admin/categories/edit/:id" component={EditCategoryPage} />
        <PrivateRoute path="/admin/articles" component={ArticlesPage} exact={true} />
          <PrivateRoute path="/admin/articles/add" component={AddArticlePage} exact={true} />
          <PrivateRoute path="/admin/articles/edit/:id" component={EditArticlePage} exact={true} />
        <PrivateRoute path="/admin/works" component={AdminWorksPage} exact={true} />
          <PrivateRoute path="/admin/works/add" component={AddWorkPage} exact={true} />
          <PrivateRoute path="/admin/works/edit/:id" component={EditWorkPage} exact={true} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
