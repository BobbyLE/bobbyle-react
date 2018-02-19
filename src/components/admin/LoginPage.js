import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startLogin, startLoginWithEmail } from '../../actions/admin/auth';
import LoginForm from './LoginForm';

export class LoginPage extends React.Component {
  static propTypes = {
    startLoginWithEmail: PropTypes.func
  }
  static defaultProps = {
    startLoginWithEmail: (() => {})
  }
  state = {
    email: '',
    password: '',
    error: ''
  }
  handleForm = (event) => {
    event.preventDefault();
    if(!this.state.email) {
      this.setState( () => ({ error: 'Please provide an Email.' }));
    } else if(this.state.email !== this.state.email.trim()) {
      this.setState( () => ({ error: 'Please provide a valid Email.' }));
    } else if(!this.state.password) {
      this.setState( () => ({ error: 'Please provide a password.' }));
    } 
    else if(this.state.password !== this.state.password.trim()) {
      this.setState( () => ({ error: 'Please provide a valid password' }));
    }
    else {
      this.setState(()=> ({error: ''}));
      this.props.startLoginWithEmail(this.state.email, this.state.password)
        .then(() => {
          this.setState(()=> ({
            error: '',
            email: '',
            password: ''
          }));
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.setState(()=> ({error:error.message}));
        }.bind(this));
    }
  }
  onEmailChange = (event) => {
    const email = event.target.value
    this.setState(()=>({ email }));
  }
  onPasswordChange = (event) => {
    const password = event.target.value
    this.setState(()=>({ password }));
  }
  
  render() {
    return (
      <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Bobby Le</h1>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="form" onSubmit={this.handleForm}>
          <input 
            type="text" 
            className="text-input" 
            placeholder="email" 
            onChange={this.onEmailChange}
            value={this.state.email}          
          />
          <input 
            type="password" 
            className="text-input" 
            placeholder="Password"
            onChange={this.onPasswordChange}
            value={this.state.password}
          />
          <button className="button">Login</button>
        </form>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLoginWithEmail: (email, password) => dispatch(startLoginWithEmail(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
