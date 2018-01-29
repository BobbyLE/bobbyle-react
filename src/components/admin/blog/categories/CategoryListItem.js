import React from 'react';
import { Link } from 'react-router-dom';


const CategoryListItem = ({id, name}, props) =>  (
  <Link className="list-item" to={`/admin/categories/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
    </div>
  </Link>
)
export default CategoryListItem;