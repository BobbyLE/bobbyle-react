import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';

import getCategories from '../../../../selectors/selector-article-category'
import Select from '../../../Select';

export class ArticleForm extends React.Component {
  static propTypes = {
    article: PropTypes.object,
    categories: PropTypes.array,
    getCategories: PropTypes.array,
    onSubmit: PropTypes.func
  }
  static defaultProps = {
    article: {
      title: '',
      categories: {},
      body: ''
    },
    categories: [],
    getCategories: [],
    onSubmit: (() => {}),
  }

  state = {
    title: this.props.article.title ? this.props.article.title : '',
    body : this.props.article.body ? this.props.article.body : '',
    categoryId: this.props.categoryId ? this.props.article.categoryId : '',
    error: ''
  };
  // For ReactQuill
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }
  
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  
  componentDidMount() {
    //List only self categories
    if(this.props.getCategories.length === 0) {
      console.log('No category choosen');
      //List all categories
      if(this.props.categories.length>0) {
        this.setState(() => ({ categoryId: this.props.categories[0].id}));
      }
    } else {
      this.setState(() => ({ categoryId: this.props.getCategories[0].id}));
    }

  }

  handleForm = (event) => {
    event.preventDefault();
    if(!this.state.title) {
      this.setState( () => ({ error: 'Please provide a title.' }));
    } else {
      this.setState(()=> ({error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        categoryId: this.state.categoryId
      });
      this.setState( () => ({
        title: '',
        categoryId: '',
        body: ''
      }));
    }
  }
  onTitleChange = (event) => {
    const title = event.target.value;
    this.setState(() => ({ title }));
  }
  onCategoryChange = (event) => {
    const categoryId = event.target.value;
    this.setState(() => ({ categoryId }));
  }

  onBodyChange = (value) => {
    this.setState(() => ({body: value }));
  }
  renderCategoriesSelect = () => {
    let categoriesForSelect = this.props.categories.map(({id, name}) => {
      return {value: id, name: name};
    });

    if(this.props.categories.length>0) {
      return (
        <Select 
          value={this.state.categoryId} 
          options={categoriesForSelect} 
          onChange={this.onCategoryChange} 
        />
      )
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="form" onSubmit={this.handleForm}>
          {this.renderCategoriesSelect()}
          <input 
            className="text-input" 
            name="title" 
            placeholder="Title" 
            value={this.state.title}
            onChange={this.onTitleChange}
            />
            <ReactQuill value={this.state.body}
              onChange={this.onBodyChange} 
              modules={this.modules}
              formats={this.formats}
              />
          <button className="button">Save Article</button>
        </form>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{__html: this.state.body}}></div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const selfCategories = props.article && props.article.categories ? props.article.categories : ArticleForm.defaultProps.article.categories;
  return {
    categories: state.categories,
    getCategories: getCategories(state.categories, selfCategories)
  }
};

export default connect(mapStateToProps)(ArticleForm);