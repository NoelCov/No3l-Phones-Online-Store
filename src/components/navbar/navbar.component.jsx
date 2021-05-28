import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-title">No3l Phones Online Store</span>
      </Link>
      <div className="navbar-links-container">
        <SearchIcon className="navbar-link" />
        <ShoppingCartIcon className="navbar-link" />
        <Link to="/signin">
          <span className="navbar-login-button">Login</span>
        </Link>
      </div>
    </nav>
  );
};
