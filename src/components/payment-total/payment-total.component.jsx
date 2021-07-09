import "./payment-total.styles.scss";

import React from "react";

import StripeButton from "../stripe-button/stripe-button.component";

export const PaymentTotal = ({ total }) => {
  return (
    <div className="payment-total-container">
      <span className="payment-total-title">CART TOTAL</span>
      <span className="payment-total-amount">${total.toFixed(2)}</span>
      <StripeButton>
        <span className="payment-total-button">Continue to Payment</span>
      </StripeButton>
      <div className="payment-warning">
        <h2 className="payment-warning-title">
          **USE THIS INFORMATION TO TEST THE PAYMENT**
        </h2>
        <div className="payment-warning-text">
          <span>Card Number: 4242-4242-4242-4242</span>
          <span>EXP: 10/10/2022</span>
          <span>CVC: 123</span>
        </div>
      </div>
    </div>
  );
};
