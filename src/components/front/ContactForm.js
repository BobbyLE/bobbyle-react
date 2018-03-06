import React from 'react';
import axios from 'axios';

export default class ContactForm extends React.Component {
  state = {
    cName: '',
    cEmail: '',
    cMessage: '',
    errors: {
      name: '',
      email: '',
      message: ''
    },
    submitted: false
  }
  onNameChange = (event) => {
    const cName = event.target.value;
    this.setState(()=> ({ cName }));
  }
  onEmailChange = (event) => {
    const cEmail = event.target.value;
    this.setState(()=> ({ cEmail}));
  }
  onMessageChange = (event) => {
    const cMessage = event.target.value;
    this.setState(()=> ({ cMessage }));
  }
  handleForm = (event) => {
    let isValid = true;
    let isNameValid = true;
    let isEmailValid = true;
    let isMessageValid = true;
    event.preventDefault();

    let errorName = this.state.errors.name;
    let errorEmail = this.state.errors.email;
    let errorMessage = this.state.errors.message;

    if(this.state.cName === '') {
      errorName = '* Must not be empty'
      isNameValid = false;
    }
    else {
      errorName = '';
      isNameValid = true;

    }

    if(this.state.cEmail === '' || !this.state.cEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errorEmail = '* Must be a valid Email'
      isEmailValid = false;
    }
    else {
      errorEmail =  '';
      isEmailValid = true;
    }

    if(this.state.cMessage === '') {
      errorMessage = '* Must not be empty'
      isMessageValid = false;
    }
    else {
      errorMessage = '';
      isMessageValid = true;
    }
    
    if(!isNameValid || !isMessageValid || !isEmailValid) {
      isValid = false;
    }
      
    if(!isValid) {
      this.setState(() => ({ 
        errors: {
          name: errorName,
          email: errorEmail,
          message: errorMessage
        }
      }))
    } else {
      this.setState(() => ({
        errors: {
          name:'',
          email:'',
          message: ''
        }
      }));
      axios.post('/send-email', {
        cName: this.state.cName,
        cEmail: this.state.cEmail,
        cMessage: this.state.cMessage
      }).then(() => {
        this.setState(()=> ({submitted: true}))
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  render() {
    return (
      <form className="row collapse contact__form__form" onSubmit={this.handleForm}>
        <fieldset className="column small-12 medium-6 row collapse name-section">
          <div className="column small-12">
            <label htmlFor="cName">
            Full Name
            <span className="warning-message">{this.state.errors.name}</span>
            </label>
          </div>
          <div className="column small-12">
            <input 
              type="text" 
              id="cName" 
              name="cName" 
              value={this.state.cName}
              onChange={this.onNameChange}
              disabled={this.state.submitted}
              />
          </div>
        </fieldset>
        <fieldset className="column small-12 medium-6 row collapse email-section">
          <div className="column small-12">
            <label htmlFor="cEmail">
              Email
            <span className="warning-message">{this.state.errors.email}</span>
            </label>
          </div>
          <div className="column small-12">
            <input 
              type="text" 
              id="cEmail" 
              name="cEmail" 
              value={this.state.cEmail}
              onChange={this.onEmailChange}
              disabled={this.state.submitted} 
              />
          </div>
        </fieldset>
        <fieldset className="column small-12 row collapse message-section">
          <div className="column small-12">
            <label htmlFor="cMessage">
            Message
            <span className="warning-message">{this.state.errors.message}</span>
            </label>
          </div>
          <div className="column small-12">
            <textarea 
            id="cMessage" 
            name="cMessage" 
            value={this.state.cMessage}
            onChange={this.onMessageChange}
            disabled={this.state.submitted}
            >
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <button className="gradient-button" disabled={this.state.submitted}>
            Send Message
            <div className="underline-style"></div>
          </button>
        </fieldset>
        <div className="column small-12">
          <p className="success-message text-center">
          { this.state.submitted && 
            'Your message has been sent!'
          }
          </p>
        </div>
      </form>
    )
  }
}