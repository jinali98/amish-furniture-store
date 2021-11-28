import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import { addItemsToWishlist } from "../../redux/whishlist/wishlist.actions";
import {
  HeartIcon,
  PreviewItemDetails,
  PreviewItemImage,
  PreviewItemName,
  PreviewItemPrice,
  PreviewItemWrapaper,
} from "./preview-item.styles";

const PreviewItem = ({ item, addItem, wishlisted }) => {
  const { imageUrl, price, name } = item;
  return (
    <PreviewItemWrapaper>
      <PreviewItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div onClick={() => wishlisted(item)}>
          <HeartIcon />
        </div>
      </PreviewItemImage>
      <PreviewItemDetails>
        <PreviewItemName>{name}</PreviewItemName>
        <PreviewItemPrice>{price}$</PreviewItemPrice>
        <CustomButton isShopItem onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      </PreviewItemDetails>
    </PreviewItemWrapaper>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItems(item)),
  wishlisted: (item) => dispatch(addItemsToWishlist(item)),
});
export default connect(null, mapDispatchToProps)(PreviewItem);
