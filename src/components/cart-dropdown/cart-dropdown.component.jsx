import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { cartToggle } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  CartItemsListContainer,
  NoCartItemsMessage,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, hiddenCart, history }) => {
  return (
    <CartDropdownContainer>
      <CartItemsListContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <NoCartItemsMessage>Cart is empty!</NoCartItemsMessage>
        )}
      </CartItemsListContainer>
      <CustomButton
        onClick={() => {
          hiddenCart();
          history.push("/checkout");
        }}
        isGotoCart
      >
        checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  hiddenCart: () => dispatch(cartToggle()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
