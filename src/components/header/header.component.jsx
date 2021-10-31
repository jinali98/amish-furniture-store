import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHiddenState } from "../../redux/cart/cart.selectors";
import { selectCurrentuser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.css";
import WishlistIcon from "../whishlist-icon/whishlist-icon.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header-wrapper">
      <Link className="logo" to="/">
        Amish
      </Link>
      <div className="navigation-links">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <p className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </p>
        ) : (
          <Link className="option " to="/signin">
            Sign In
          </Link>
        )}
        <Link to="/wishlist">
          <WishlistIcon />
        </Link>
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectHiddenState,
});

export default connect(mapStateToProps)(Header);
