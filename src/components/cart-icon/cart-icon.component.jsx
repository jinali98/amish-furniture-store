import React from "react";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cart.actions";
import { CartIconContainer, CartNumber, SvgIcon } from "./cart-icon.styles";
const CartIcon = ({ cartToggle, numberOfCartItems }) => {
  return (
    <CartIconContainer onClick={cartToggle}>
      <SvgIcon />
      <CartNumber>{numberOfCartItems}</CartNumber>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

const mapStateToProps = (state) => ({
  numberOfCartItems: state.cart.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
