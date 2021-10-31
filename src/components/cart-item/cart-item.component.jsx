import React from "react";
import "./cart-item.styles.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item-wrapper">
      <div
        className="cart-item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="cart-item-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">
          ${price} X {quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
