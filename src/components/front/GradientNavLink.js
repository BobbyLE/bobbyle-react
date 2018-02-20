import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const GradientNavLink = (props) => {
  const { children, beginColor, endColor, ...rest } = props;
  return (
    <NavLink {...rest}>
      {children}
      <div 
        className="underline-style" 
        style={{backgroundImage: `linear-gradient(to right, ${beginColor}, ${endColor})`}}>
      </div>
    </NavLink>
  )
}

GradientNavLink.propTypes = {
  beginColor: PropTypes.string,
  endColor: PropTypes.string,
  to: PropTypes.string,
  activeClassName: PropTypes.string
}
GradientNavLink.defaultProps = {
  beginColor: 'white',
  endColor: 'black',
  to: '',
  activeClassName: ''
}
export default GradientNavLink;