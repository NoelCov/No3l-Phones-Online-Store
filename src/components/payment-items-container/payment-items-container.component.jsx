import React from "react";

import "./payment-items-container.styles.scss";

import { CartItem } from "../cart-item/cart-item.component";

export const PaymentItemsContainer = ({ cart, onClick }) => {
  const keys = Object.keys(cart);

  return (
    <div className="payment-container">
      <span className="payment-title">CART</span>

      {/* This text empties the user's cart when clicked. */}
      <span className="payment-empty-cart" onClick={onClick}>
        Empty Cart
      </span>
      
      <div className="payment-info-container">
        <span className="info-property">Item</span>
        <span className="info-property">Price</span>
        <span className="info-property">Quantity</span>
        <span className="info-property">Total</span>
      </div>
      <div className="cart-items-container">
        {keys.map((item) => {
          return (
            <CartItem
              phoneName={item}
              phonePrice={cart[item].price}
              quantity={cart[item].quantity}
            />
          );
        })}
      </div>
    </div>
  );
};
