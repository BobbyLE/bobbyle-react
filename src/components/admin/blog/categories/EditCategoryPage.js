import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryForm from './CategoryForm';
import { startEditCategory, startRemoveCategory } from '../../../../actions/admin/categories-action';

export class EditCategoryPage extends React.Component {
  static propTypes = {
    category: PropTypes.object,
    startEditCategory: PropTypes.func,
    startRemoveCategory: PropTypes.func
  }
  static defaultProps = {
    category: [],
    startEditCategory: (()=> {}),
    startRemoveCategory: (()=>{})
  }

  onSubmit = (category) => {
    this.props.startEditCategory(this.props.category.id, category);
    this.props.history.push('/admin/categories');
  }
  onRemove = (event) => {
    this.props.startRemoveCategory({ id: this.props.category.id });
    this.props.history.push('/admin/categories');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Category</h1>
          </div>
        </div>
        <div className="content-container">
          <CategoryForm
            category={this.props.category}
            onSubmit={this.onSubmit}
            formRight={true}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Category</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    category: state.categories.find((category) => category.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditCategory: (id, category) => dispatch(startEditCategory(id, category)),
  startRemoveCategory: (data) => dispatch(startRemoveCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);