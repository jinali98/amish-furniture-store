export const addItemsToCart = (cartItems, newItemToAdd) => {
  const existingItem = cartItems.find(
    (cartitem) => cartitem.id === newItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);

  if (existingItem.quantity === 1)
    return cartItems.filter((item) => item.id !== itemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
