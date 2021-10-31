import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItemsConverted } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";

const ShopOverview = ({ shopCollection }) => {
  return (
    <>
      {shopCollection.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollection: selectShopItemsConverted,
});

export default connect(mapStateToProps)(ShopOverview);
