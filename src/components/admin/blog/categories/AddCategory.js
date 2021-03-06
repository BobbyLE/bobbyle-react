import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryForm from './CategoryForm';
import { startAddCategory } from '../../../../actions/admin/categories-action';


export class AddCategory extends React.Component {
  static propTypes = {
    startAddCategory: PropTypes.func
  }
  static defaultProps = {
    startAddCategory: (()=>{})
  }
  onSubmit = (category) => {
    this.props.startAddCategory(category);
  }
  render() {
    return (
      <div>
        <CategoryForm 
          onSubmit={this.onSubmit} 
          formRight={true}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddCategory: (category) => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(AddCategory);