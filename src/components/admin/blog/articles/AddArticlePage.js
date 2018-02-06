import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../../PageHeader';
import ArticleForm from './ArticleForm';
import { startAddArticle } from '../../../../actions/admin/articles-action';

export class AddArticle extends React.Component {
  static propTypes = {
    startAddArticle: PropTypes.func
  }
  static defaultProps = {
    startAddArticle: []
  }
  handleAddArticle = (article) => {
    this.props.startAddArticle(article)
    this.props.history.push('/admin/articles');
  }
  render() {
    return (
      <div>
        <PageHeader title="Add new article"/>
        <div className="content-container">
          <ArticleForm 
            onSubmit={this.handleAddArticle}
          />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddArticle: (article) => dispatch(startAddArticle(article))
});

export default connect(undefined, mapDispatchToProps)(AddArticle);