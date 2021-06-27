import "./cart-item.styles.scss";

import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { connect } from "react-redux";

import { addItem, decreaseItem } from "../../redux/cart/cart.actions";

const CartItem = ({ phone, onClick, increaseItem, decreaseItem }) => {
  const { phoneTitle, price, quantity } = phone;
  const total = price * quantity;

  return (
    <div className="cart-item">
      <span className="cart-property">{phoneTitle}</span>
      <span className="cart-property">${price}</span>
      <span className="cart-property-quantity">
        <RemoveIcon className="icon" onClick={() => decreaseItem(phoneTitle)} />
        {quantity}
        <AddIcon className="icon" onClick={() => increaseItem(phone)} />
      </span>
      <span className="cart-property">${total.toFixed(2)}</span>
      <span className="cart-property" onClick={onClick}>
        <DeleteIcon />
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increaseItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
