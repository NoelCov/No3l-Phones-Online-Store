import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import { deleteItem } from "../../redux/cart/cart.actions";

import {
  CartItems,
  EmptyCartTextContainer,
} from "./cart-items-container.styles";

const CartItemsContainer = ({ keys, cartItems, deleteItem }) => {
  return (
    <CartItems>
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
        <EmptyCartTextContainer>CART IS EMPTY</EmptyCartTextContainer>
      )}
    </CartItems>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItemsContainer);
