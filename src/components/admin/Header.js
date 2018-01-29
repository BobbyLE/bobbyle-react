import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/admin/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/admin/dashboard">
          <h1>Admin</h1>
        </Link>
        <NavLink to="/admin/categories" className="button button--link">Categories</NavLink>
        {/*/<NavLink to="/admin/articles" className="button button--link">Articles</NavLink>*/}
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
