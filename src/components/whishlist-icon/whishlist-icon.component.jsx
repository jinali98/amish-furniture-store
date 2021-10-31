import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Wishlist } from "../../assets/wishlist.svg";
import { selectNumberOfItemsInTheWishlist } from "../../redux/whishlist/wishlist.selectors";
import "./wishlist-icon.styles.css";

const WishlistIcon = ({ itemsNumber }) => {
  return (
    <div className="cart-icon-container">
      <Wishlist />
      <span className="wishlist-items-number">{itemsNumber}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsNumber: selectNumberOfItemsInTheWishlist,
});

export default connect(mapStateToProps)(WishlistIcon);
