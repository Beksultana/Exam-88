import React, {Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router";
import Products from "./containers/Products/Products";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {logoutUser} from "./store/actions/userAction";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import Category from "./containers/Category/Category";
import NewProduct from "./containers/NewProduct/NewProduct";
import Product from "./containers/Product/Product";

function App(props) {
  return (
    <Fragment>
        <NotificationContainer/>
      <header>
          <Toolbar user={props.user}
                   logout={props.logoutUser}/>
      </header>
        <Container>
            <Category product={props.product}/>
            <Switch>
                <Route path={"/"} exact component={Products}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/new/product" exact component={NewProduct}/>
                <Route path="/product/:id" exact component={Product}/>
            </Switch>
        </Container>
    </Fragment>
  );
}

const mapStateToProps = state => ({
    user: state.users.user,
    product: state.products.products
});
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
