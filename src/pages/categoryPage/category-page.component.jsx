import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import PreviewItem from "../../components/preview-item/preview-item.component";
import {
  PreviewCollectionItems,
  PreviewContainer,
  PreviewItemTitle,
} from "./category-page.styles";

const CategoryPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <PreviewContainer>
      <PreviewItemTitle>{title.toUpperCase()}</PreviewItemTitle>
      <PreviewCollectionItems>
        {items.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </PreviewCollectionItems>
    </PreviewContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryPage);
