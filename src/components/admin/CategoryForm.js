import React from 'react';
import classNames from 'classnames';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      categoryName: props.category ? props.category.name : '',
      error: ''
    };
  }
  handleForm = (event) => {
    event.preventDefault();
    if(!this.state.categoryName) {
      this.setState( () => ({ error: 'Please provide a name.' }));
    } else if(this.state.categoryName !== this.state.categoryName.trim()) {
      this.setState( () => ({ error: 'Please provide a correct category name without space at the beginning and ending.' }));
    }
    else {
      this.setState(()=> ({error: ''}));
      this.props.onSubmit({
        name: this.state.categoryName
      });
      this.setState( () => ({categoryName: ''}));
    }
  }
  onNameChange = (event) => {
    const categoryName = event.target.value;
    this.setState(() => ({ categoryName }));
  }

  render() {
    var classes ='';
    var classes = classNames( this.props.className, {
      'form--right': (this.props.formRight)
    });
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className={`form ${ classes }`} onSubmit={this.handleForm}>
          <input 
            className="text-input" 
            name="categoryName" 
            placeholder="name" 
            value={this.state.categoryName}
            onChange={this.onNameChange}
            />
          <button className="button">Save category</button>
        </form>
      </div>
    )
  }
}