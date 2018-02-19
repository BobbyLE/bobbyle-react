import React from 'react';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default PageHeader;