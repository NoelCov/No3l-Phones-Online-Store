import React from "react";

import {
  PaymentInfoContainer,
  InformationPropertyContainer,
} from "./payment-information-container.styles";

const PaymentInformationContainer = () => {
  return (
    <PaymentInfoContainer>
      <InformationPropertyContainer>Item</InformationPropertyContainer>
      <InformationPropertyContainer>Price</InformationPropertyContainer>
      <InformationPropertyContainer>Quantity</InformationPropertyContainer>
      <InformationPropertyContainer>Total</InformationPropertyContainer>
      <InformationPropertyContainer>Delete Item</InformationPropertyContainer>
    </PaymentInfoContainer>
  );
};

export default PaymentInformationContainer;
