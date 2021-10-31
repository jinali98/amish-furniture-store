import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/homePage/home-page.component";
import ShopPage from "./pages/shopPage/shop-page.component";
import SigninSignup from "./pages/signin-signup-page/signin-signup.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentuser } from "./redux/user/user.selectors";

import CheckoutPage from "./pages/checkoutPage/checkout.component";
import WishListPage from "./pages/wishlistPage/wishlist-page.component";
import { GlobalStyles } from "./global.styles";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://i.ibb.co/D5CKM8S/spur-cupboard.jpg
// https://i.ibb.co/cg7JCwm/tif-chair.jpg
// https://i.ibb.co/wYdQz4t/zazenne-sideboard.jpg
// https://i.ibb.co/D7gc7QC/aviator-side-table.jpg
// https://i.ibb.co/s9pvDJQ/behnam-chair.jpg
// https://i.ibb.co/DK0Ny3k/benjamin-stool.jpg
// https://i.ibb.co/CKL8zJP/charlie-chair.jpg
// https://i.ibb.co/GT7NLgN/city-chair.jpg
// https://i.ibb.co/qnj9xYw/eugenivy-sofa-chair.jpg
// https://i.ibb.co/FsgWkwD/jagger-sofa.jpg
// https://i.ibb.co/FnySybK/lannister-chair.jpg
// https://i.ibb.co/hRQ292B/lux-chair.jpg
// https://i.ibb.co/j8xQvCf/manor-chair.jpg
// https://i.ibb.co/RpWyYRT/mimi-dining-chair.jpg
// https://i.ibb.co/KKdNkCQ/pudgie-chair.jpg
// https://i.ibb.co/WvrDRCd/rally-chair.jpg
// https://i.ibb.co/G21LMHw/reggio-high-back-sofa.jpg
// https://i.ibb.co/f0qmd2D/rex-sideboard.jpg
