import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Carticon } from "../../assets//Carticon.svg";
import { cartToggle } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.css";
const CartIcon = ({ cartToggle, numberOfCartItems }) => {
  return (
    <div className="cart-icon-container" onClick={cartToggle}>
      <Carticon />
      <span className="cart-number">{numberOfCartItems}</span>
    </div>
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
