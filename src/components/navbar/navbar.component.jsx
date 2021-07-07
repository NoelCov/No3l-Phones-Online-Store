import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./navbar.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import { selectItemCount } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const NavBar = ({ currentUser, itemCount }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-title">No3l Phones Online Store</span>
      </Link>
      <div className="navbar-links-container">
        <Link to="/payment">
          <span className="item-counter">{itemCount > 0 ? itemCount : null}</span>
          <ShoppingCartIcon className="navbar-link" />
        </Link>
        {currentUser ? (
          <span className="navbar-login-button" onClick={() => auth.signOut()}>
            Sign Out
          </span>
        ) : (
          <Link to="/signin">
            <span className="navbar-login-button">Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});

export default connect(mapStateToProps)(NavBar);
