import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/shop-overview.component";
import CategoryPage from "../categoryPage/category-page.component";
import "./shop-page.styles.css";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-container">
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CategoryPage}
      />
    </div>
  );
};

export default ShopPage;
