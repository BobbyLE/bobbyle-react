import React from 'react';

export default class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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
      this.props.onSubmit({
        email: this.state.email,
        password: this.state.password
      });
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
      <div>
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
    )
  }
}