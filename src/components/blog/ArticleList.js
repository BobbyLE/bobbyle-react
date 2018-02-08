import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import getCategoriesName from '../../../../selectors/selector-article-category';
import ArticleListItem from '../blog/ArticleListItem';

export class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object)
  }
  static defaultProps = {
    articles: []
  }

  render() {
    const { articles } = this.props
    return (
      <div className="article-list">
        {
          articles.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No articles</span>
            </div>
          ) : (
            articles.map((article) => {
              return <ArticleListItem key={article.id} {...article} />
            })
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(ArticleList);