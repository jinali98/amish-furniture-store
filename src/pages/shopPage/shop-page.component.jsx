import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/shop-overview.component";
import ShopOverviewContainer from "../../components/shop-overview/shop-overview.container";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import CategoryPage from "../categoryPage/category-page.component";
import CategoryPageContainer from "../categoryPage/category-page.container";
import "./shop-page.styles.css";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollection } = this.props;

    fetchCollection();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-container">
        <Route exact path={`${match.path}`} component={ShopOverviewContainer} />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
