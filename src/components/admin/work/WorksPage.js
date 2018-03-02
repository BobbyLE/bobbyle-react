import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';
import WorkList from './WorkList'

const WorksPage = () => (
  <div>
    <PageHeader title="Work"/>
    <div className="content-container">
      <div className="page-header__action">
        <Link className="button" to="/admin/works/add">Add Work</Link>
      </div>
    </div>
    <WorkList />
  </div>
);

export default WorksPage;