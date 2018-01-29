import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../PageHeader';

const ArticlesPage = () => (
  <div>
    <PageHeader title="Articles"/>
    <div className="content-container">
      <div className="page-header__action">
        <Link className="button" to="/create">Add Article</Link>
      </div>
    </div>
  </div>
);

export default ArticlesPage;