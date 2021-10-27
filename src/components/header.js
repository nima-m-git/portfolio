import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="logo-item" to="/">
          <h1 className="logo">Nima</h1>
        </NavLink>

        <ul className="nav-links">
          <NavLink to="/portfolio" className="nav-item" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/about" className="nav-item" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-item" activeClassName="active">
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
