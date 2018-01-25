import React from 'react';

import PageHeader from './PageHeader';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

export class CategoriesPage extends React.Component  {
  render() {
    return (
      <div>
        <PageHeader title="Categories"/>
        <CategoryList />
        <div className="content-container">
          <AddCategory />
        </div>
      </div>
    );
  }
}

export default CategoriesPage;