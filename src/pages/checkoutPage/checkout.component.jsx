import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectTotal } from "../../redux/cart/cart.selectors";
import "./checkout.styles.css";

const CheckoutPage = ({ cartitems, cartTotal }) => {
  return (
    <div className="checkout-page-container">
      <div className="checkout-items-wrapper">
        {cartitems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total-amount-wrapper">
        <p className="total-amount">Total amount: ${cartTotal}</p>
      </div>
      <div>
        <StripeButton price={cartTotal} />
        <p>Please use the following Test Card Data</p>
        <p>4242 4242 4242 4242 - 01/23 - 123 </p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartitems: selectCartItems,
  cartTotal: selectTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
