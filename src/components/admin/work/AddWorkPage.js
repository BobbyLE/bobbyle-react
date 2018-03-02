import React from 'react';
import { connect } from 'react-redux';
import { startAddWork } from '../../../actions/admin/works-action';

import PageHeader from '../PageHeader';
import WorkForm from './WorkForm';

class AddWorkPage extends React.Component {
  handleAddWork = (work) => {
    this.props.startAddWork(work);
    this.props.history.push('/admin/works');
  }
  render() {
    return (
      <div>
        <PageHeader title="Add new Work"/>
        <div className="content-container">
          <WorkForm onSubmit={this.handleAddWork}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWork: (work) => dispatch(startAddWork(work))
});
export default connect(undefined, mapDispatchToProps)(AddWorkPage);