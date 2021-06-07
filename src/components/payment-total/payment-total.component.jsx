import "./payment-total.styles.scss";

import React from "react";

export const PaymentTotal = ({ total }) => {
  return (
    <div className="payment-total-container">
      <span className="payment-total-title">CART TOTAL</span>
      <span className="payment-total-amount">{total.toFixed(2)}</span>
      <span className="payment-total-button">Continue to Payment</span>
    </div>
  );
};
