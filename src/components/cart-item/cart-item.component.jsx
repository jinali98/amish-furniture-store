import React from "react";
import {
  CartItemDetails,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemWrapper,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemWrapper>
      <CartItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          ${price} X {quantity}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;
