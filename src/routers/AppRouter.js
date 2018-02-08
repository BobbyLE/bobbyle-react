import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/admin/DashboardPage';
import CategoriesPage from '../components/admin/blog/categories/CategoriesPage';
import EditCategoryPage from '../components/admin/blog/categories/EditCategoryPage';
import ArticlesPage from '../components/admin/blog/articles/ArticlesPage';
import AddArticlePage from '../components/admin/blog/articles/AddArticlePage';
import EditArticlePage from '../components/admin/blog/articles/EditArticlePage';
import HomePage from '../components/pages/HomePage';
import BlogPage from '../components/pages/BlogPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/admin/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import PortfolioRoute from './PortfolioRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PortfolioRoute path="/" component={HomePage} exact={true} />
        <PortfolioRoute path="/blog" component={BlogPage} />
        <PublicRoute path="/admin" component={LoginPage} exact={true} />
          <PrivateRoute path="/admin/dashboard" component={DashboardPage} />
          <PrivateRoute path="/admin/categories" component={CategoriesPage} exact={true} />
            <PrivateRoute path="/admin/categories/edit/:id" component={EditCategoryPage} />
          <PrivateRoute path="/admin/articles" component={ArticlesPage} exact={true} />
            <PrivateRoute path="/admin/articles/add" component={AddArticlePage} exact={true} />
            <PrivateRoute path="/admin/articles/edit/:id" component={EditArticlePage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
