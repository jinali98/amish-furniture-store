import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewItem from "../../components/preview-item/preview-item.component";
import { selectWishlistedItems } from "../../redux/whishlist/wishlist.selectors";
import {
  WishlistedItems,
  WishlistPageWrapper,
  WishlistTitle,
} from "./wishlist-page.styles";

const WishListPage = ({ wishlistItems }) => {
  return (
    <WishlistPageWrapper>
      <WishlistTitle>WISHLIST</WishlistTitle>
      <WishlistedItems>
        {wishlistItems.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </WishlistedItems>
    </WishlistPageWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistedItems,
});

export default connect(mapStateToProps)(WishListPage);
