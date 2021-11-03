import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../hoc/withSpinner";
import {
  selectErrorMessage,
  selectIsLoading,
} from "../../redux/shop/shop.selectors";
import ShopOverview from "./shop-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  errorMessage: selectErrorMessage,
});

const ShopOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ShopOverview);

export default ShopOverviewContainer;
