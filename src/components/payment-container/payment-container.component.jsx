import "./payment-container.styles.scss";

import React from "react";

import { CartItem } from "../cart-item/cart-item.component";

export const PaymentContainer = () => {
  return (
    <div className="payment-container">
      <span className="payment-title">CART</span>
      <div className="payment-info-container">
        <span className="info-property">Price</span>
        <span className="info-property">Item</span>
        <span className="info-property">Quantity</span>
        <span className="info-property">Total</span>
      </div>
      <div className="cart-items-container">
        <CartItem phoneName="Iphone Pro Max" phonePrice={1000} quantity={2} />
      </div>
    </div>
  );
};
