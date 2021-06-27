import React from "react";

import "./cart-items-container.styles.scss";

import CartItem from "../cart-item/cart-item.component";

import { deleteItem } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";

const CartItemsContainer = ({ keys, cartItems, deleteItem }) => {
  return (
    <div className="cart-items-container">
      {keys.length ? (
        keys.map((item, index) => {
          const currentItem = cartItems[item];

          return (
            <CartItem
              key={index}
              phoneName={currentItem.phoneTitle}
              phonePrice={currentItem.price}
              quantity={currentItem.quantity}
              phone={currentItem}
              onClick={() => deleteItem(currentItem.phoneTitle)}
            />
          );
        })
      ) : (
        <p className="empty-cart-text">CART IS EMPTY</p>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItemsContainer);
