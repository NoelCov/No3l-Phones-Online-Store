export const addItemToCart = (cartItems, cartItemToAdd) => {
  const phoneTitle = cartItemToAdd.phoneTitle;
  const price = cartItemToAdd.price;

  if (!cartItems[phoneTitle]) {
    cartItems[phoneTitle] = {
      price: price,
      quantity: 1,
      phoneTitle: phoneTitle,
    };
  } else if (cartItems[phoneTitle]) {
    cartItems[phoneTitle].quantity += 1;
  }
  return { ...cartItems };
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
  return { ...cartItems };
};

export const decreaseItem = (cartItems, cartItemToDecrease) => {
  if (cartItems[cartItemToDecrease].quantity > 1) {
    cartItems[cartItemToDecrease].quantity -= 1;
    return { ...cartItems };
  } else {
    delete cartItems[cartItemToDecrease];
    return { ...cartItems };
  }
};