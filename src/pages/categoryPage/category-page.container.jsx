import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../hoc/withSpinner";
import { selectIsShopLoaded } from "../../redux/shop/shop.selectors";
import CategoryPage from "./category-page.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsShopLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CategoryPage);

export default CategoryPageContainer;
