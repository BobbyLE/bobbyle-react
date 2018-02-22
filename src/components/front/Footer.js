import React from 'react';


const Footer = () => {
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
    <footer className="footer">
      <section className="footer__copyright">
        <span>Copyright © Bobby Le.</span>
      </section>
      <aside className="footer__links">
        <ul className="footer__links__list">
          <li className="footer__links__list__item">
            <a href={socialUrl.facebook} target="_blank" rel="external" className="footer__links__social footer__links__social--facebook"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.linkedin} target="_blank" rel="external" className="footer__links__social footer__links__social--linkedin"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.github} target="_blank" rel="external" className="footer__links__social footer__links__social--github"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.instagram} target="_blank" rel="external" className="footer__links__social footer__links__social--instagram"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.px} target="_blank" rel="external" className="footer__links__social footer__links__social--500px"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.flickr} target="_blank" rel="external" className="footer__links__social footer__links__social--flickr"></a>
          </li>
          <li className="footer__links__list__item">
            <a href={socialUrl.twitter} target="_blank" rel="external" className="footer__links__social footer__links__social--twitter"></a>
          </li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;