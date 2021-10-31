import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import PreviewItem from "../../components/preview-item/preview-item.component";

const CategoryPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className="preview-container">
      <h2 className="preview-item-title">{title.toUpperCase()}</h2>
      <div className="preview-collection-items">
        {items.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryPage);
