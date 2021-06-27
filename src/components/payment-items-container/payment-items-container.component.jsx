import React from "react";

import "./payment-items-container.styles.scss";

import { CartItem } from "../cart-item/cart-item.component";

import { connect } from "react-redux";

import { deleteAll, deleteItem } from "../../redux/cart/cart.actions";

const PaymentItemsContainer = ({ cartItems, emptyCart, deleteItem }) => {
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

      <div className="payment-info-container">
        <span className="info-property">Item</span>
        <span className="info-property">Price</span>
        <span className="info-property">Quantity</span>
        <span className="info-property">Total</span>
        <span className="info-property">Delete Item</span>
      </div>
      <div className="cart-items-container">
        {keys.length ? (
          keys.map((item, index) => {
            const currentItem = cartItems[item];

            return (
              <CartItem
                key={index}
                phoneName={currentItem.phoneTitle}
                phonePrice={currentItem.price}
                quantity={currentItem.quantity}
                onClick={() => deleteItem(currentItem.phoneTitle)}
              />
            );
          })
        ) : (
          <p className="empty-cart-text">CART IS EMPTY</p>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(deleteAll()),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(PaymentItemsContainer);
