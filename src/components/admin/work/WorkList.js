import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import WorkListItem from './WorkListItem';

export const WorkList = ({works = [] }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Works</div>
      <div className="show-for-desktop">Works</div>
      <div className="show-for-desktop">Tags</div>
    </div>
    <div className="list-body">
    {
      works.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No works</span>
        </div>
      ) : (
        works.map((work) => {
          return <WorkListItem key={work.id} {...work} />
        })
      )
    }
    </div>
  </div>
);
WorkList.propTypes = {
  works: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    works : state.works
  }
}

export default connect(mapStateToProps)(WorkList);