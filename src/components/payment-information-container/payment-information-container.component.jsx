import React from "react";

import "./payment-information-container.styles.scss";

const PaymentInformationContainer = () => {
  return (
    <div className="payment-information-container">
      <span className="info-property">Item</span>
      <span className="info-property">Price</span>
      <span className="info-property">Quantity</span>
      <span className="info-property">Total</span>
      <span className="info-property">Delete Item</span>
    </div>
  );
};

export default PaymentInformationContainer;
