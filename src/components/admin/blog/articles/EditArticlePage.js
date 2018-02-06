import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleForm from './ArticleForm';
import { startEditArticle, startRemoveArticle, startSetArticles } from '../../../../actions/admin/articles-action';
import { startSetCategories } from '../../../../actions/admin/categories-action';

export class EditArticlePage extends React.Component {
  static propTypes = {
    article: PropTypes.object,
    startEditArticle: PropTypes.func,
    startRemoveArticle: PropTypes.func,
    startSetArticles: PropTypes.func
  }
  static defaultProps = {
    article: {},
    startEditArticle: (() => {}),
    startRemoveArticle: (() => {}),
    startSetArticles: (() => {})
  }
  handleEditArticle = (article) => {
    this.props.startEditArticle(this.props.article.id, article);
    this.props.startSetArticles();
    this.props.history.push('/admin/articles');
  }
  handleRemoveArticle = (event) => {
    this.props.startRemoveArticle({ id: this.props.article.id });
    this.props.history.push('/admin/articles');
  }
  render() {
    const { article } = this.props
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Article</h1>
            <button className="button button--secondary" onClick={this.handleRemoveArticle}>Remove Article</button>
          </div>
        </div>
        <div className="content-container">
          <ArticleForm 
            article={article}
            onSubmit={this.handleEditArticle}
          /> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    article: state.articles.find((article) => article.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
    startRemoveArticle: (data) => dispatch(startRemoveArticle(data)),
    startSetArticles: () => dispatch(startSetArticles())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);