import React from 'react';
import Waypoint from 'react-waypoint';

import GradientTitle from '../front/GradientTitle';
import ContactForm from '../front/ContactForm';

export default class contactPage extends React.Component {
  render() {
    const beginColor = "#a20330";
    const endColor = "#e600b3";
    return (
      <div className="container small main contact animated animatedFadeInUp fadeInUp">
        <section className="main__header">
          <GradientTitle 
          beginColor={beginColor}
          endColor={endColor}>
            Contact
          </GradientTitle>
        </section>
        <section className="contact__hello">
          <h2 className="contact__hello__title">SAY HELLO</h2>
          <p>Have a Web/Photography project or any request? <br />
            Get in touch at <a href="mailto:bobby.weiss.le@gmail.com"><strong>bobby.weiss.le@gmail.com</strong></a> or find me on social networks:
          </p>
        </section>
        <section className="contact__form">
          <ContactForm />
        </section>
      </div>
    );
  }
}