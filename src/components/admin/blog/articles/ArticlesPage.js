import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../PageHeader';
import ArticleList from './ArticleList';

const ArticlesPage = () => (
  <div>
    <PageHeader title="Articles"/>
    <div className="content-container">
      <div className="page-header__action">
        <Link className="button" to="/admin/articles/add">Add Article</Link>
      </div>
      <ArticleList />
    </div>
  </div>
);

export default ArticlesPage;