import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ total, children }) => {
  const stripeTotal = total * 100; // Convert total to cents
  const apiKey = process.env.REACT_APP_API_KEY;

  const onToken = () => {};

  return (
    <StripeCheckout
      stripeKey={apiKey}
      token={onToken}
      amount={stripeTotal}
      name="No3l Codes"
      description="This is just for testing"
      label="Pay Now"
      shippingAddress
      billingAddress
    >
    {children}
    </StripeCheckout>
  );
};

export default StripeButton;
