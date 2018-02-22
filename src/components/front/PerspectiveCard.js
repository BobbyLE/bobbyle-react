import React from 'react';
import PropTypes from 'prop-types';

export default class PerspectiveCard extends React.Component {
  static propTypes = {
    intensity: PropTypes.number
  }
  static defaultProps = {
    intensity: 1
  }
  rotateX = 0;
  rotateY = 0;

  handleMouseMove = (event) => {
    const el = event.target,
          intensity = this.props.intensity,
          elX      = el.offsetLeft,
          elY      = el.offsetTop,
          elWidth  = el.offsetWidth,
          elHeight = el.offsetHeight;

    const mouseX = event.pageX,
          mouseY = event.pageY;

    this.rotateY = -( ( elWidth/2 - (mouseX - elX) ) / (elWidth/2) * intensity ),
    this.rotateX = ( elHeight/2 - (mouseY - elY) ) / (elHeight/2) * intensity;
        
    el.style.transform = 'rotateX('+this.rotateX+'deg) rotateY('+ this.rotateY +'deg)';
  }
  handleMouseOut = (event) => {
    const eventTarget = event.target;
    eventTarget.style.transform = 'rotateY(0) rotateX(0)';
  }
  render() {
    const {intensity, children} = this.props;
    return (
      <div className="js-perspective-card perspective-card"
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}>
        {children}
      </div>
    )
  }
}