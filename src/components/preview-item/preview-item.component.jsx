import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import "./preview-item.styles.css";
import { addItemsToWishlist } from "../../redux/whishlist/wishlist.actions";
const PreviewItem = ({ item, addItem, wishlisted }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="preview-item">
      <div
        className="preview-item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div onClick={() => wishlisted(item)}>
          <Heart />
        </div>
      </div>
      <div className="preview-item-details">
        <p className="item-name">{name}</p>
        <p className="item-price">{price}$</p>
        <CustomButton isShopItem onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItems(item)),
  wishlisted: (item) => dispatch(addItemsToWishlist(item)),
});
export default connect(null, mapDispatchToProps)(PreviewItem);
