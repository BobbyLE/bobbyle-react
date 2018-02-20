import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GradientNavLink from './GradientNavLink';

const Header = () => (
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
            beginColor="#009cf3"
            endColor="#16d6d9">
            About
          </GradientNavLink>
        </li>
        <li className="header__nav__item">
          <GradientNavLink 
            to="/work" 
            activeClassName="is-selected"
            beginColor="rgb(255, 191, 2)"
            endColor="rgb(255, 85, 25)">
            Work
          </GradientNavLink>
        </li>
        <li className="header__nav__item">
          <a href="#">Photography
          <div className="underline-style"></div>
          </a>
        </li>
        <li className="header__nav__item">
          <GradientNavLink 
            to="/blog" 
            activeClassName="is-selected"
            beginColor="#16D6D9"
            endColor="#96CC29">
            Blog
          </GradientNavLink>
        </li>
        <li className="header__nav__item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;