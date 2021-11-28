import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectTotal } from "../../redux/cart/cart.selectors";
import {
  CheckoutItemWrapper,
  CheckoutPageContainer,
  TotalAmount,
  TotalAmountWrapper,
} from "./checkout.styles";

const CheckoutPage = ({ cartitems, cartTotal }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutItemWrapper>
        {cartitems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </CheckoutItemWrapper>
      <TotalAmountWrapper>
        <TotalAmount>Total amount: ${cartTotal}</TotalAmount>
      </TotalAmountWrapper>
      <div>
        <StripeButton price={cartTotal} />
        <p>Please use the following Test Card Data</p>
        <p>4242 4242 4242 4242 - 01/23 - 123 </p>
      </div>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartitems: selectCartItems,
  cartTotal: selectTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
