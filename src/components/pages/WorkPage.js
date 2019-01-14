import React from 'react';
import { Waypoint } from 'react-waypoint';

import GradientTitle from '../front/GradientTitle';
import WorkList from '../front/WorkList';
export default class WorkPage extends React.Component {
  state = {
    showClients: false,
    showBnp: false,
    showHaviland: false,
    showAntargaz: false,
    showLaduree: false,
    showElectrolux: false,
    showDaum: false
  }
  beginColor = "#397f00";
  endColor = "#9ecc00";

  clientsWayPoint = () => {
    this.setState(() => ({showClients: true}));
  }
  bnpWayPoint = () => {
    this.setState(() => ({showBnp: true}));
  }
  havilandWayPoint = () => {
    this.setState(() => ({showHaviland: true}));
  }
  antargazWayPoint = () => {
    this.setState(() => ({showAntargaz: true}));
  }
  ladureeWayPoint = () => {
    this.setState(() => ({showLaduree: true}));
  }
  electroluxWayPoint = () => {
    this.setState(() => ({showElectrolux: true}));
  }
  daumWayPoint = () => {
    this.setState(() => ({showDaum: true}));
  }
  render() {
    return (
      <div className="container main work animated animatedFadeInUp fadeInUp">
        <section className="main__header">
          <GradientTitle 
            beginColor={this.beginColor}
            endColor={this.endColor}>
            Work
          </GradientTitle>
        </section>
        <WorkList />
        <section className={"more-clients animatedFadeInUp animated" + (this.state.showClients && ' fadeInUp')}>
          <Waypoint onEnter={this.clientsWayPoint} />
          <GradientTitle 
            beginColor={this.beginColor}
            endColor={this.endColor}
            >
            More clients
          </GradientTitle>
          <div className="clients-grid">
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showBnp && ' fadeInUp')}>
              <Waypoint onEnter={this.bnpWayPoint} />
              <img src="/images/works/bnp-paribas.png" alt="Bnp Paribas"/>
            </div>
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showHaviland && ' fadeInUp')}>
              <Waypoint onEnter={this.havilandWayPoint} />
              <img src="/images/works/haviland.png" alt="Haviland"/>
            </div>
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showAntargaz && ' fadeInUp')}>
              <Waypoint onEnter={this.antargazWayPoint} />
              <img src="/images/works/antargaz.png" alt="Antargaz"/>
            </div>
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showLaduree && ' fadeInUp')}>
              <Waypoint onEnter={this.ladureeWayPoint} />
              <img src="/images/works/laduree.png" alt="Ladurée"/>
            </div>
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showElectrolux && ' fadeInUp')}>
              <Waypoint onEnter={this.electroluxWayPoint} />
              <img src="/images/works/electrolux.png" alt="Electrolux"/>
            </div>
            <div className={"clients-column animatedFadeInUp animated" + (this.state.showDaum && ' fadeInUp')}>
              <Waypoint onEnter={this.daumWayPoint} />
              <img src="/images/works/daum.png" alt="Daum"/>
            </div>
          </div>
        </section>
      </div>   
    )
  }
};