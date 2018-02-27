import React from 'react';

export default class ContactForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <form className="row collapse contact__form__form" onSubmit={this.onSubmit}>
        <fieldset className="column small-12 medium-6 row collapse name-section">
          <div className="column small-12">
            <label htmlFor="cName">Full Name</label>
          </div>
          <div className="column small-12">
            <input type="text" id="cName" name="cName" />
          </div>
        </fieldset>
        <fieldset className="column small-12 medium-6 row collapse email-section">
          <div className="column small-12">
            <label htmlFor="cEmail">Email</label>
          </div>
          <div className="column small-12">
            <input type="text" id="cEmail" name="cEmail" />
          </div>
        </fieldset>
        <fieldset className="column small-12 row collapse message-section">
          <div className="column small-12">
            <label htmlFor="cMessage">Message</label>
          </div>
          <div className="column small-12">
            <textarea id="cMessage" name="cMessage"></textarea>
          </div>
        </fieldset>
        <fieldset>
          <button className="gradient-button">
            Send Message
            <div className="underline-style"></div>
          </button>
        </fieldset>
      </form>
    )
  }
}