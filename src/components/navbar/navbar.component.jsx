import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-title">No3l Phones Online Store</span>
      <div className="navbar-links-container">
        <SearchIcon className="navbar-link" />
        <ShoppingCartIcon className="navbar-link" />
        {/* I have to finish this function to take me to the login page */}
        <span onClick={() => console.log("Open login page")} className="navbar-login-button">Login</span>
      </div>
    </nav>
  );
};
