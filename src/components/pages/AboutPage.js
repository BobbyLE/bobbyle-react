import React from 'react';
import GradientTitle from '../front/GradientTitle';


const AboutPage = () => {
  const beginColor = "#009cf3";
  const endColor = "#16d6d9";
  return (
    <div className="container main about">
      <section className="main__header column">
        <GradientTitle 
        beginColor={beginColor}
        endColor={endColor}>
          About
        </GradientTitle>
      </section>
      <section className="presentation column small-12">
        <aside className="presentation__photo">
        </aside>
        <section className="presentation__text">
          <h2 className="presentation__text__title">Bobby Le</h2>
          <span className="presentation__text__subtitle">Web Developer, Photographer</span>
          <h3>Presentation</h3>
          <p></p>
        </section>
      </section>
      <section className="experiences column small-12 medium-6">
        <h3>Experiences</h3>
      </section>
      <section className="skills column small-12 medium-6">
        <h3>Skills</h3>
      </section>
    </div>   
  )
};

export default AboutPage;