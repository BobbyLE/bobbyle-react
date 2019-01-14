import React from 'react';
import { Waypoint } from 'react-waypoint';

export default class Footer extends React.Component {
  state = {
    showFooter: false
  }
  footerWayPoint = () => {
    this.setState(() => ({showFooter: true}));
  }
  render() {
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
      <footer className={`footer animatedFadeInUp animated ${this.state.showFooter ? 'fadeInUp': ''}`}>
        <Waypoint onEnter={this.footerWayPoint} />
        <section className="footer__copyright">
          <span>Copyright © 2018 Bobby Le.</span>
        </section>
        <aside className="footer__links">
          <ul className="footer__links__list">
            <li className="footer__links__list__item">
              <a href={socialUrl.facebook} target="_blank" rel="external" className="footer__links__social footer__links__social--facebook">
                <img src="/images/socials/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.linkedin} target="_blank" rel="external" className="footer__links__social footer__links__social--linkedin">
                <img src="/images/socials/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.github} target="_blank" rel="external" className="footer__links__social footer__links__social--github">
                <img src="/images/socials/github.png" alt="Github" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.instagram} target="_blank" rel="external" className="footer__links__social footer__links__social--instagram">
                <img src="/images/socials/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.px} target="_blank" rel="external" className="footer__links__social footer__links__social--500px">
                <img src="/images/socials/500px.png" alt="500px" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.flickr} target="_blank" rel="external" className="footer__links__social footer__links__social--flickr">
                <img src="/images/socials/flickr.png" alt="Flickr" />
              </a>
            </li>
            <li className="footer__links__list__item">
              <a href={socialUrl.twitter} target="_blank" rel="external" className="footer__links__social footer__links__social--twitter">
                <img src="/images/socials/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </aside>
      </footer>
    );
  }
}