export const addOrRemoveItems = (currentWishlist, itemToAddOrRemove) => {
  const existingItem = currentWishlist.find(
    (item) => item.id === itemToAddOrRemove.id
  );

  //if the item is in the wish list remove it
  if (existingItem) {
    return currentWishlist.filter((item) => item.id !== itemToAddOrRemove.id);
  }
  //if the item is not in the wishlist add it
  return [...currentWishlist, itemToAddOrRemove];
};
