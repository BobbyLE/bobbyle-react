import React from 'react';
import { Link } from 'react-router-dom'
import Waypoint from 'react-waypoint';

import GradientTitle from '../front/GradientTitle';
import PerspectiveCard from '../front/PerspectiveCard';

export default class AboutPage extends React.Component {
  state = {
    showExperience: false,
    showSkills: false,
    showResume: false
  }
  componentDidMount() {
    $(document).foundation();
  }
  experienceWayPoint = () => {
    this.setState(() => ({showExperience: true}));
  }
  skillsWayPoint = () => {
    this.setState(() => ({showSkills: true}));
  }
  resumeWayPoint = () => {
    this.setState(() => ({showResume: true}));
  }
  render() {
    const beginColor = "#004792";
    const endColor = "#0097d7";
    return (
      <div className="container main about animated animatedFadeInUp fadeInUp">
        <section className="main__header">
          <GradientTitle 
          beginColor={beginColor}
          endColor={endColor}>
            About
          </GradientTitle>
        </section>
        <section className="presentation">
          <aside className="presentation__photo">
            <PerspectiveCard intensity={7}>
              <Link to="/contact" data-tooltip aria-haspopup="true" className="has-tip has-child-img" data-disable-hover="false" tabIndex="1" title="Reach me!" data-position="bottom" data-alignment="center">
                <img src="/images/photo.jpg" alt="photo" />
              </Link>
            </PerspectiveCard>
          </aside>
          <section className="presentation__text">
            <h2 className="presentation__text__title">Bobby Le</h2>
            <span className="presentation__text__subtitle">
              Web Developer, Photographer
              <div className="underline-style"></div>
            </span>
            <h3 className="section-title">Presentation</h3>
            <p>Everything started with passion to web technologies (HTML, Flash AS3) at the age of 13 coding my first websites.
            In 2012, I graduated with a <strong>Degree in Web Development and Multimedia</strong> in Paris, France. 
            I now have 5 years experience working as a <strong>front-end developer</strong> in several web agencies.
            <br />Right now, I am specialising in Javascript frameworks like <strong>React</strong>.</p>
            <p>This website has been coded using React, Redux, Foundation, Yarn, Webpack, Babel and Express.</p>
            <p>When I'm not coding, you'll find me taking <Link to="#">photos</Link> or playing Volley-Ball & Guitar.</p>
          </section>
        </section>
        <section className={"experiences animatedFadeInUp animated" + (this.state.showExperience && ' fadeInUp')}>
          <Waypoint onEnter={this.experienceWayPoint} />
          <h3 className="section-title">Experiences</h3>
          <dl>
            <dt>YouConnect<br/>
              <span>Front-end Developer</span>
            </dt>
            <dd>2016-2017</dd>
          </dl>
          <dl>
            <dt>Ylly<br/>
              <span>Front-end Developer</span>
            </dt>
            <dd>2015-2016</dd>
          </dl>
          <dl>
            <dt>H2C Interactive<br/>
              <span>Front-end Developer</span>
            </dt>
            <dd>2013-2015</dd>
          </dl>
          <dl>
            <dt>Gris-Metal<br/>
              <span>Front-end Developer</span>
            </dt>
            <dd>2011-2012</dd>
          </dl>
          <dl>
            <dt>Charenton Communication<br/>
              <span>Web/Flash Developer (internship)</span>
            </dt>
            <dd>2010 & 2011</dd>
          </dl>
        </section>
        <section className={"skills animatedFadeInUp animated" + (this.state.showSkills && ' fadeInUp')}>
          <Waypoint onEnter={this.skillsWayPoint} />
          <h3 className="section-title">Skills</h3>
          <dl>
            <dt>Front-end</dt>
            <dd>React</dd>
            <dd>Javascript (ES6)</dd>
            <dd>HTML5</dd>
            <dd>CSS3/SCSS</dd>
            <dd>jQuery</dd>
            <dd>Bootstrap</dd>
            <dd>Foundation</dd>
          </dl>
          <dl>
            <dt>Back-end</dt>
            <dd>PHP</dd>
            <dd>Ruby On Rails</dd>
          </dl>
          <dl>
            <dt>Tools</dt>
            <dd>Npm</dd>
            <dd>Yarn</dd>
            <dd>Webpack</dd>
            <dd>Babel</dd>
            <dd>Express</dd>
          </dl>
          <dl>
            <dt>CMS</dt>
            <dd>WordPress</dd>
            <dd>Magento</dd>
            <dd>Prestashop</dd>
          </dl>
          <dl>
            <dt>Test</dt>
            <dd>Jest</dd>
            <dd>Enzyme</dd>
          </dl>
          <dl>
            <dt>DBMS</dt>
            <dd>MySQL</dd>
            <dd>Firebase</dd>
          </dl>
          <dl>
            <dt>Versioning/Deployment</dt>
            <dd>Git</dd>
            <dd>Heroku</dd>
            <dd>AWS</dd>
          </dl>
          <dl>
            <dt>Software</dt>
            <dd>Photoshop</dd>
            <dd>Sublime Text</dd>
            <dd>Visual Studio Code</dd>
            <dd>Lightroom</dd>
          </dl>
        </section>
        <section className={"resume animatedFadeInUp animated" + (this.state.showResume && ' fadeInUp')}>
          <Waypoint onEnter={this.resumeWayPoint} />
          <div className="resume__link">
            <a href="/Bobby_Le_Resume.pdf" target="_blank">
              DOWNLOAD MY RESUME
              <div className="underline-style"></div>
            </a>
          </div>
        </section>
      </div>   
    )
  }
}