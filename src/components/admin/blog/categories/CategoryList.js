import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import CategoryListItem from './CategoryListItem';

export const CategoryList = ({categories = [] }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Categories</div>
      <div className="show-for-desktop">Categorie</div>
      <div className="show-for-desktop">Articles count</div>
    </div>
    <div className="list-body">
    {
      categories.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No categories</span>
        </div>
      ) : (
        categories.map((category) => {
          return <CategoryListItem key={category.id} {...category} />
        })
      )
    }
    </div>
  </div>
);
CategoryListItem.propTypes = {
  categories: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    categories : state.categories
  }
}

export default connect(mapStateToProps)(CategoryList);