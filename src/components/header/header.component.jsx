import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHiddenState } from "../../redux/cart/cart.selectors";
import { selectCurrentuser } from "../../redux/user/user.selectors";
import WishlistIcon from "../whishlist-icon/whishlist-icon.component";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderWrapper,
  Logo,
  NavigationLinks,
  OptionLink,
  OptionPara,
} from "./header.styles";

const Header = ({ currentUser, hidden, signout }) => {
  return (
    <HeaderWrapper>
      <Logo className="logo" to="/">
        Amish
      </Logo>
      <NavigationLinks>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionPara onClick={signout}>SIGN OUT</OptionPara>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <Link to="/wishlist">
          <WishlistIcon />
        </Link>
        <CartIcon />
      </NavigationLinks>
      {!hidden && <CartDropdown />}
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectHiddenState,
});

const mapDispatchToActions = (dispatch) => ({
  signout: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToActions)(Header);
