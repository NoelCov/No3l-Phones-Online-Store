export const addItemToCart = (cartItems, cartItemToAdd) => {
  const phone = cartItemToAdd[0];

  if (!cartItems[phone]) {
    cartItems[phone] = {
      price: cartItemToAdd[1],
      quantity: 1,
      phoneTitle: phone,
    };
  } else {
    cartItems[phone].quantity += 1;
  }
  return {...cartItems};
};

export const getCartTotal = (cartItems) => {
  const keys = Object.keys(cartItems);

  return keys.reduce(
    (total, current) =>
      (total += cartItems[current].price * cartItems[current].quantity),
    0
  );
};

export const deleteItem = (cartItems, cartItemToDelete) => {
  delete cartItems[cartItemToDelete];
  return {...cartItems};
};
