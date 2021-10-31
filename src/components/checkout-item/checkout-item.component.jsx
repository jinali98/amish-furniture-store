import React from "react";
import { connect } from "react-redux";
import { addItems, removeItems } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.css";

const CheckoutItem = ({ item, increment, decrement }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item-wrapper">
      <div
        className="item-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="item-details">
        <p className="item-name">{name}</p>
        <p className="item-price">${price}</p>
        <div className="quantity-change-container">
          <div className="decrement-icon" onClick={() => decrement(item)}>
            &#10094;
          </div>
          <p className="item-quantity">{quantity}</p>
          <div className="increment-icon" onClick={() => increment(item)}>
            &#10095;
          </div>
        </div>
      </div>
      <p className="item-total-amount">${quantity * price}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: (item) => dispatch(addItems(item)),
  decrement: (item) => dispatch(removeItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
