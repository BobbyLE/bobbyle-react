import React from 'react';
import { connect } from 'react-redux';

export const DashboardPage = (props) => {
  return (
    <div>
      Welcome {props.currentUser.email}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth
});

export default connect(mapStateToProps)(DashboardPage);
