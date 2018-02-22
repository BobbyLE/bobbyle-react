import React from 'react';
import { Link } from 'react-router-dom'
import GradientTitle from '../front/GradientTitle';


const AboutPage = () => {
  const beginColor = "#004792";
  const endColor = "#0097d7";
  return (
    <div className="container main about">
      <section className="main__header column">
        <GradientTitle 
        beginColor={beginColor}
        endColor={endColor}>
          About
        </GradientTitle>
      </section>
      <section className="presentation collapse">
        <aside className="presentation__photo">
          <img src="/images/photo.jpg" alt="photo" />
        </aside>
        <section className="presentation__text">
          <h2 className="presentation__text__title">Bobby Le</h2>
          <span className="presentation__text__subtitle">
            Web Developer, Photographer
            <div className="underline-style"></div>
          </span>
          <h3 className="section-title">Presentation</h3>
          <p>Everything started with passion to web technologies (HTML, Flash) at the age of 13 coding my first websites.
          In 2012, I graduated with a <strong>Degree in Web Development and Multimedia</strong> in Paris, France. 
          I now have 5 years experience working as a <strong>front-end developer</strong> in several web agencies.
          <br />Right now, I am specialising in Javascript frameworks like <strong>ReactJS</strong>.</p>
          <p>This website has been coded using ReactJS, Foundation, Yarn, Webpack, Babel & Redux. </p>
          <p>When I'm not coding, you'll find me taking <Link to="#">photos</Link> or playing Volley-Ball & Guitar.</p>
        </section>
      </section>
      <section className="experiences column small-12 medium-6">
        <h3 className="section-title">Experiences</h3>
      </section>
      <section className="skills column small-12 medium-6">
        <h3 className="section-title">Skills</h3>
      </section>
    </div>   
  )
};

export default AboutPage;