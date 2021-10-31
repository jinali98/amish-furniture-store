import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewItem from "../../components/preview-item/preview-item.component";
import { selectWishlistedItems } from "../../redux/whishlist/wishlist.selectors";

import "./wishlist-page.styles.css";

const WishListPage = ({ wishlistItems }) => {
  console.log("this is wishlist", wishlistItems);

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">WISHLIST</h2>
      <div className="wishlisted-items">
        {wishlistItems.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistedItems,
});

export default connect(mapStateToProps)(WishListPage);
