import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header.component";

import HomePage from "./pages/homePage/home-page.component";
import ShopPage from "./pages/shopPage/shop-page.component";
import SigninSignup from "./pages/signin-signup-page/signin-signup.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentuser } from "./redux/user/user.selectors";

import CheckoutPage from "./pages/checkoutPage/checkout.component";
import WishListPage from "./pages/wishlistPage/wishlist-page.component";
import { GlobalStyles } from "./global.styles";
import { selectShopItemsConverted } from "./redux/shop/shop.selectors";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/wishlist" component={WishListPage} />
        </Switch>
      </div>
    );
  }
}

//get the currentuser data from the redux store
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  collectionsArray: selectShopItemsConverted,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
