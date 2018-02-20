import React from 'react'
import PropTypes from 'prop-types';

export default class BodyClass extends React.Component {
  static propTypes = {
    nameClass: PropTypes.string
  }
  static defaultProps = {
    nameClass: ''
  }
  componentDidMount() {
    document.body.classList.add(this.props.nameClass);
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.add(nextProps.nameClass);
  }
  componentWillUnmount() {
    document.body.classList.remove(this.props.nameClass);
  }
  render() {
    return null;
  }
}