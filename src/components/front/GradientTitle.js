import React from 'react';
import PropTypes from 'prop-types';

const GradientTitle = (props) => {
  const { children, beginColor, endColor, ...rest } = props;
  return (
    <h1 className="main__title">
      {children}
      <div 
        className="underline-style" 
        style={{backgroundImage: `linear-gradient(to right, ${beginColor}, ${endColor})`}}>
      </div>
    </h1>
  )
}

GradientTitle.propTypes = {
  beginColor: PropTypes.string,
  endColor: PropTypes.string
}
GradientTitle.defaultProps = {
  beginColor: 'white',
  endColor: 'black'
}
export default GradientTitle;