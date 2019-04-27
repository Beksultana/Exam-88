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

function App(props) {
  return (
    <Fragment>
        <NotificationContainer/>
      <header>
          <Toolbar user={props.user}
                   logout={props.logoutUser}/>
      </header>
        <Container>
            <Switch>
                <Route path="/" exact component={Products}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Container>
    </Fragment>
  );
}

const mapStateToProps = state => ({
    user: state.users.user
});
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
