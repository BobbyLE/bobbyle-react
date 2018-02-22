import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GradientNavLink from './GradientNavLink';

const Header = () => {
  const aboutColor = {
    beginColor: "#004792",
    endColor: "#0097d7"
  };
  const workColor = {
    beginColor: "#397f00",
    endColor: "#9ecc00"
  };
  const photoColor = {
    beginColor: "#e16000",
    endColor: "#c89600"
  };
  const blogColor = {
    beginColor: "#e60c00",
    endColor: "#c34d00"
  };
  const contactColor = {
    beginColor: "#a20330",
    endColor: "#e600b3"
  };

  return (
    <header className="header">
      <section className="header__logo">
        <h1>Bobby Le</h1>
      </section>
      <nav className="header__navbar">
        <ul className="header__nav">
          <li className="header__nav__item">
            <GradientNavLink 
              to="/about" 
              activeClassName="is-selected"
              beginColor={aboutColor.beginColor}
              endColor={aboutColor.endColor}>
              About
            </GradientNavLink>
          </li>
          <li className="header__nav__item">
            <GradientNavLink 
              to="/work" 
              activeClassName="is-selected"
              beginColor={workColor.beginColor}
              endColor={workColor.endColor}>
              Work
            </GradientNavLink>
          </li>
          <li className="header__nav__item">
            <GradientNavLink 
              to="#" 
              activeClassName="is-selected"
              beginColor={photoColor.beginColor}
              endColor={photoColor.endColor}>
              Photo
            </GradientNavLink>
          </li>
          <li className="header__nav__item">
            <GradientNavLink 
              to="/blog" 
              activeClassName="is-selected"
              beginColor={blogColor.beginColor}
              endColor={blogColor.endColor}>
              Blog
            </GradientNavLink>
          </li>
          <li className="header__nav__item">
            <GradientNavLink 
              to="#" 
              activeClassName="is-selected"
              beginColor={contactColor.beginColor}
              endColor={contactColor.endColor}>
              Contact
            </GradientNavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;