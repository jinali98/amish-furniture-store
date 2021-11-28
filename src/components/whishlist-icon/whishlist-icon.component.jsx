import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNumberOfItemsInTheWishlist } from "../../redux/whishlist/wishlist.selectors";
import {
  CartIconContainer,
  WishListIcon,
  WishlistItemNumber,
} from "./whishlist-icon.styles";

const WishlistIcon = ({ itemsNumber }) => {
  return (
    <CartIconContainer>
      <WishListIcon />
      <WishlistItemNumber>{itemsNumber}</WishlistItemNumber>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsNumber: selectNumberOfItemsInTheWishlist,
});

export default connect(mapStateToProps)(WishlistIcon);
