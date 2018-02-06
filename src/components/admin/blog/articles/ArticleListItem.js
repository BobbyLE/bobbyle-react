import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getCategories from '../../../../selectors/selector-article-category';

export class ArticleListItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    categories: PropTypes.object,
    title: PropTypes.string,
    getCategories: PropTypes.array
  }
  static defaultProps = {
    id: '',
    categories: {},
    title: '',
    getCategories: []
  }
  render() {
    const { id, categories, title, getCategories } = this.props
    const categoryName = getCategories[0].name
    return (
      <Link className="list-item" to={`/admin/articles/edit/${id}`}>
        <div>
          <h3 className="list-item__title">{title}</h3>
        </div>
        <h3 className="list-item__data">{categoryName}</h3>
      </Link>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    getCategories: getCategories(state.categories, props.categories)
  }
}
export default connect(mapStateToProps)(ArticleListItem);