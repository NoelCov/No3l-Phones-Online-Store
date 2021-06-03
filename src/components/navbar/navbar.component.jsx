import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

import "./navbar.styles.scss";

import { auth } from "../../firebase/firebase.utils";

export const NavBar = ({ currentUser }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-title">No3l Phones Online Store</span>
      </Link>
      <div className="navbar-links-container">
        <SearchIcon className="navbar-link" />
        <ShoppingCartIcon className="navbar-link" />
        {currentUser ? (
          <span className="navbar-login-button" onClick={() => auth.signOut()}>Sign Out</span>
        ) : (
          <Link to="/signin">
            <span className="navbar-login-button">Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};
