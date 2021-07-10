import React from "react";

import { connect } from "react-redux";
import { deleteAll } from "../../redux/cart/cart.actions";

import CartItemsContainer from "../cart-items-container/cart-items-container.component";
import PaymentInformationContainer from "../payment-information-container/payment-information-container.component";

import {
  PaymentContainer,
  PaymentTitleContainer,
  EmptyCartTextContainer,
} from "./payment-items-container.styles";

const PaymentItemsContainer = ({ cartItems, emptyCart }) => {
  const keys = Object.keys(cartItems);

  return (
    <PaymentContainer>
      <PaymentTitleContainer>CART</PaymentTitleContainer>

      {/* This text empties the user's cart when clicked. */}
      {keys.length ? (
        <EmptyCartTextContainer onClick={() => emptyCart()}>
          Empty Cart
        </EmptyCartTextContainer>
      ) : null}

      <PaymentInformationContainer />
      <CartItemsContainer keys={keys} cartItems={cartItems} />
    </PaymentContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(deleteAll()),
});

export default connect(null, mapDispatchToProps)(PaymentItemsContainer);
