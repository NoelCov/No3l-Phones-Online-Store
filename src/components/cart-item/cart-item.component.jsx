import React from "react";
import { connect } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";

import { addItem, decreaseItem } from "../../redux/cart/cart.actions";

import {
  CartItemContainer,
  CartProperty,
  CartPropertyQuantity,
  RemoveIconContainer,
  AddIconContainer,
} from "./cart-item.styles";

const CartItem = ({ phone, onClick, increaseItem, decreaseItem }) => {
  const { phoneTitle, price, quantity } = phone;
  const total = price * quantity;

  return (
    <CartItemContainer>
      <CartProperty>{phoneTitle}</CartProperty>
      <CartProperty>${price}</CartProperty>
      <CartPropertyQuantity>
        <RemoveIconContainer onClick={() => decreaseItem(phoneTitle)} />
        {quantity}
        <AddIconContainer onClick={() => increaseItem(phone)} />
      </CartPropertyQuantity>
      <CartProperty>${total.toFixed(2)}</CartProperty>
      <CartProperty onClick={onClick}>
        <DeleteIcon />
      </CartProperty>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increaseItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
