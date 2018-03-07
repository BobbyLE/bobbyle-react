import React from 'react';
import { connect } from 'react-redux';

import WorkListItem from './WorkListItem';

export class WorkList extends React.Component {
  render() {
    const { works } = this.props;
    return (
      <section className="work-list">
          <div className="row work-row small-up-2 medium-up-3 large-up-4">
          {
            works.length === 0 ? '' : (
              works.map((work) => {
                return <WorkListItem key={work.id} {...work} />
              })
            )
          }
          </div>
        </section>
    )
  }
}
const mapStateToProps = (state) => ({
  works: state.works
})
export default connect(mapStateToProps)(WorkList);