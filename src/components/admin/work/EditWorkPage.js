import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WorkForm from './WorkForm';
import { startEditWork, startRemoveWork, startSetWorks } from '../../../actions/admin/works-action';

export class EditWorkPage extends React.Component {
  static propTypes = {
    work: PropTypes.object,
    startEditWork: PropTypes.func,
    startRemoveWork: PropTypes.func,
    startSetWorks: PropTypes.func
  }
  static defaultProps = {
    work: {},
    startEditWork: (() => {}),
    startRemoveWork: (() => {}),
    startSetWorks: (() => {})
  }
  handleEditWork = (work) => {
    this.props.startEditWork(this.props.work.id, work);
    this.props.startSetWorks();
    this.props.history.push('/admin/works');
  }
  handleRemoveWork = (event) => {
    this.props.startRemoveWork({ id: this.props.work.id, img: this.props.work.img });
    this.props.history.push('/admin/works');
  }
  render() {
    const { work } = this.props
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Work</h1>
            <button className="button button--secondary" onClick={this.handleRemoveWork}>Remove Work</button>
          </div>
        </div>
        <div className="content-container">
          <WorkForm 
            work={work}
            onSubmit={this.handleEditWork}
          /> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    work: state.works.find((work) => work.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditWork: (id, work) => dispatch(startEditWork(id, work)),
    startRemoveWork: (data) => dispatch(startRemoveWork(data)),
    startSetWorks: () => dispatch(startSetWorks())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditWorkPage);