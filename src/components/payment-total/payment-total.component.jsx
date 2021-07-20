import React from "react";

import StripeButton from "../stripe-button/stripe-button.component";

import {
  PaymentTotalContainer,
  PaymentTotalTitle,
  PaymentTotalAmount,
  PaymentTotalButton,
  PaymentWarningContainer,
  PaymentWarningTitle,
  PaymentWarningText,
} from "./payment-total.styles";

export const PaymentTotal = ({ total }) => {
  return (
    <PaymentTotalContainer>
      <PaymentTotalTitle>CART TOTAL</PaymentTotalTitle>
      <PaymentTotalAmount>${total.toFixed(2)}</PaymentTotalAmount>
      <StripeButton>
        <PaymentTotalButton>Continue to Payment</PaymentTotalButton>
      </StripeButton>
      <PaymentWarningContainer>
        <PaymentWarningTitle>
          **USE THIS INFORMATION TO TEST THE PAYMENT**
        </PaymentWarningTitle>
        <PaymentWarningText>
          <span>Card Number: 4242-4242-4242-4242</span>
          <span>EXP: 10/10/2022</span>
          <span>CVC: 123</span>
        </PaymentWarningText>
      </PaymentWarningContainer>
    </PaymentTotalContainer>
  );
};
