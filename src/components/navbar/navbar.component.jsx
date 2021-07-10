import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { selectItemCount } from "../../redux/cart/cart.selectors";

import {
  NavBarContainer,
  NavBarItemCounterContainer,
  NavBarTitleContainer,
  NavBarLinksContainer,
  NavBarShoppingCartIconContainer,
  NavBarLoginButtonContainer,
} from "./navbar.styles";

const NavBar = ({ currentUser, itemCount }) => {
  return (
    <NavBarContainer>
      <Link to="/">
        <NavBarTitleContainer>No3l Phones Online Store</NavBarTitleContainer>
      </Link>
      <NavBarLinksContainer>
        <Link to="/payment">
          <NavBarItemCounterContainer>
            {itemCount > 0 ? itemCount : null}
          </NavBarItemCounterContainer>
          <NavBarShoppingCartIconContainer />
        </Link>
        {currentUser ? (
          <NavBarLoginButtonContainer onClick={() => auth.signOut()}>
            Sign Out
          </NavBarLoginButtonContainer>
        ) : (
          <Link to="/signin">
            <NavBarLoginButtonContainer>Sign In</NavBarLoginButtonContainer>
          </Link>
        )}
      </NavBarLinksContainer>
    </NavBarContainer>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});

export default connect(mapStateToProps)(NavBar);
