import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getCategories from '../../selectors/selector-article-category';

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
    const { id, categories, title, body, getCategories } = this.props
    const categoryName = getCategories[0].name
    return (
      <div className="article-list-item">
        <h2>{title}</h2>
        <h3>{categoryName}</h3>
        <div dangerouslySetInnerHTML={{__html: body}}></div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    getCategories: getCategories(state.categories, props.categories)
  }
}
export default connect(mapStateToProps)(ArticleListItem);