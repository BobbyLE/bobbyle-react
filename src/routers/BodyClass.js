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
  componentDidUpdate(props) {
    document.body.classList.add(props.nameClass);
  }
  componentWillUnmount() {
    document.body.classList.remove(this.props.nameClass);
  }
  render() {
    return null;
  }
}