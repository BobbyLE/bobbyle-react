import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class WorkListItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.string
  }
  static defaultProps = {
    id: '',
    title: '',
    tags: PropTypes.string
  }
  render() {
    const { id, title, tags } = this.props;
    return (
      <Link className="list-item" to={`/admin/works/edit/${id}`}>
        <div>
          <h3 className="list-item__title">{title}</h3>
        </div>
        <h3 className="list-item__data">{tags}</h3>
      </Link>
    )
  }
}