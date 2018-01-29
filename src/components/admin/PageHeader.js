import React from 'react';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1>{props.title}</h1>
        <div className="page-header__action">
          {/*<Link className="button" to="/admin/articles/add">Add Article</Link>*/}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;