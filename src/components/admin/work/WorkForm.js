import React from 'react';
import { storage } from '../../../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';

export default class WorkForm extends React.Component {
  state = {
    title: this.props.work ? this.props.work.title : '',
    tags: this.props.work ? this.props.work.tags : '',
    img: this.props.work ? this.props.work.img : '',
    isUploading: false,
    progress: 0,
    imgURL: this.props.work ? this.props.work.imgURL : '',
    url: this.props.work ? this.props.work.url : ''
  };

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({img: filename, progress: 100, isUploading: false});
    storage.ref('works').child(filename).getDownloadURL().then(url => this.setState({imgURL: url}));
  };
  onTitleChange = (event) => {
    const title = event.target.value;
    this.setState(() => ({title}));
  }
  onTagsChange = (event) => {
    const tags = event.target.value;
    this.setState(() => ({tags}));
  }
  onUrlChange = (event) => {
    const url = event.target.value;
    this.setState(() => ({url}));
  }
  handleForm = (event) => {
    event.preventDefault();
    if(!this.state.title) {
      this.setState( () => ({ error: 'Please provide a title.' }));
    } else if (!this.state.tags) {
      this.setState( () => ({ error: 'Please provide tags.' }));
    }
    else {
      this.setState(()=> ({error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        tags: this.state.tags,
        img: this.state.img,
        imgURL: this.state.imgURL,
        url: this.state.url
      });
      this.setState( () => ({
        title: '',
        tags: '',
        img: '',
        imgURL: '',
        url: ''
      }));
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="form" onSubmit={this.handleForm}>
          <input 
            className="text-input" 
            name="title" 
            placeholder="Title" 
            value={this.state.title}
            onChange={this.onTitleChange}/>
          <input 
            className="text-input" 
            name="tags" 
            placeholder="Tags" 
            value={this.state.tags}
            onChange={this.onTagsChange}/>
          <input
            className="text-input" 
            name="url" 
            placeholder="Site URL" 
            value={this.state.url}
            onChange={this.onUrlChange}/>

          <label>Image:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.imgURL &&
            <img src={this.state.imgURL} />
          }
          <FileUploader
            accept="image/*"
            name="img"
            randomizeFilename
            storageRef={storage.ref('works')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <button className="button">Save Work</button>
        </form>
      </div>
    )
  }
}