import React from "react";
import { connect } from "react-redux";
import { addItems, removeItems } from "../../redux/cart/cart.actions";
import {
  CheckoutItemDetails,
  CheckoutItemImage,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemWrapper,
  DecrementIcon,
  IncrementIcon,
  ItemTotalAmount,
  QuantityChangeContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ item, increment, decrement }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CheckoutItemDetails>
        <CheckoutItemName>{name}</CheckoutItemName>
        <CheckoutItemPrice>${price}</CheckoutItemPrice>
        <QuantityChangeContainer>
          <DecrementIcon onClick={() => decrement(item)}>
            &#10094;
          </DecrementIcon>
          <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
          <IncrementIcon onClick={() => increment(item)}>
            &#10095;
          </IncrementIcon>
        </QuantityChangeContainer>
      </CheckoutItemDetails>
      <ItemTotalAmount>${quantity * price}</ItemTotalAmount>
    </CheckoutItemWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: (item) => dispatch(addItems(item)),
  decrement: (item) => dispatch(removeItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
