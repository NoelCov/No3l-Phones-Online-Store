import "./cart-item.styles.scss";

import React from "react";

export const CartItem = ({ phoneName, phonePrice, quantity }) => {
  const total = phonePrice * quantity;

  return (
    <div className="cart-item">
      <span className="cart-property">{phoneName}</span>
      <span className="cart-property">${phonePrice}</span>
      <span className="cart-property">{quantity}</span>
      <span className="cart-property">${total.toFixed(2)}</span>
    </div>
  );
};
