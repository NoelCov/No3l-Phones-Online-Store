import React, { useEffect } from "react";
import { connect } from "react-redux";

import PaymentItemsContainer from "../../components/payment-items-container/payment-items-container.component";
import { PaymentTotal } from "../../components/payment-total/payment-total.component";

import { getTotal } from "../../redux/cart/cart.actions";

import { selectCartItems, selectTotal } from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

import { PaymentPageContainer } from "./payment-page.styles";

const PaymentPage = ({ cartItems, total, dispatch }) => {
  useEffect(() => {
    dispatch(getTotal());
  });

  return (
    <PaymentPageContainer>
      <PaymentItemsContainer cartItems={cartItems} />
      <PaymentTotal total={total} />
    </PaymentPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps)(PaymentPage);
