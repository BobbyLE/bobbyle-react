import React from 'react';
import Waypoint from 'react-waypoint';

import GradientTitle from '../front/GradientTitle';
import ContactForm from '../front/ContactForm';

export default class contactPage extends React.Component {
  render() {
    const beginColor = "#a20330";
    const endColor = "#e600b3";
    const socialUrl = {
      facebook: "https://www.facebook.com/bobby.le",
      linkedin: "https://www.linkedin.com/in/bobbywle/",
      github: "https://github.com/bobbyle",
      instagram: "https://www.instagram.com/bobbywle/",
      px: "http://500px.com/bobbyle",
      flickr: "https://www.flickr.com/photos/bobbyle",
      twitter: "https://twitter.com/BobbyWeissLE"
    }
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
        <section className="contact__social">
          <ul className="contact__social__list">
            <li className="contact__social__list__item">
              <a href={socialUrl.facebook} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--facebook">
                <img src="/images/socials/contact/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.linkedin} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--linkedin">
                <img src="/images/socials/contact/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.github} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--github">
                <img src="/images/socials/contact/github.png" alt="Github" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.instagram} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--instagram">
                <img src="/images/socials/contact/instagram.png" alt="instagram" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.px} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--px">
                <img src="/images/socials/contact/500px.png" alt="500px" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.flickr} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--flickr">
                <img src="/images/socials/contact/flickr.png" alt="Flickr" />
              </a>
            </li>
            <li className="contact__social__list__item">
              <a href={socialUrl.twitter} target="_blank" rel="external" className="contact__social__list__item__link contact__social__list__item__link--twitter">
                <img src="/images/socials/contact/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </section>
        <section className="contact__form">
          <ContactForm />
        </section>
      </div>
    );
  }
}