import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CategoryListItem = ({articles = {}, id = '', name = ''}) =>  {
  const articlesCount = Object.keys(articles).length;
  return (
    <Link className="list-item" to={`/admin/categories/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{name}</h3>
      </div>
      <h3 className="list-item__data">{articlesCount}</h3>
    </Link>
  )
}
CategoryListItem.propTypes = {
  articles: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string
}

export default CategoryListItem;