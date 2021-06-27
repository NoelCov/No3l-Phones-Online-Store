import React from "react";

import "./payment-items-container.styles.scss";

import { connect } from "react-redux";
import { deleteAll } from "../../redux/cart/cart.actions";

import CartItemsContainer from "../cart-items-container/cart-items-container.component";
import PaymentInformationContainer from "../payment-information-container/payment-information-container.component";

const PaymentItemsContainer = ({ cartItems, emptyCart }) => {
  const keys = Object.keys(cartItems);

  return (
    <div className="payment-container">
      <span className="payment-title">CART</span>

      {/* This text empties the user's cart when clicked. */}
      {keys.length ? (
        <span className="payment-empty-cart" onClick={() => emptyCart()}>
          Empty Cart
        </span>
      ) : null}

      <PaymentInformationContainer />
      <CartItemsContainer keys={keys} cartItems={cartItems} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(deleteAll()),
});

export default connect(null, mapDispatchToProps)(PaymentItemsContainer);
