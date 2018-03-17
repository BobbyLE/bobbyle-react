import React from 'react';
import PropTypes from 'prop-types';

export default class WorkListItem extends React.Component {
  ratioItem = 0.6;
  
  static propTypes = {
    title: PropTypes.string,
    tags: PropTypes.string,
    imgURL: PropTypes.string,
  }
  static defaultProps = {
    title: '',
    tags: '',
    imgURL: ''
  }
  state = {
    workItemHeight: 156
  }
  updateDimensions = () => {
    const widthItem = this.refs.linkWork.getBoundingClientRect().width;
    const heightItem = widthItem * 0.6;
    this.setState(() => ({workItemHeight: heightItem}))
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const {title, tags, imgURL, url} = this.props;
    return (
      <div className="column work-column">
        <a ref="linkWork" href={url} target="_blank" style={
          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imgURL})`,
            height: this.state.workItemHeight
          }
        }>
          <div>
            <h2>{title}</h2>
            <h3>{tags}</h3>
          </div>
        </a>
      </div>
    )
  }
}