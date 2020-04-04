import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "./NavLink";
import styled from "styled-components";
import { NavMenu } from "./NavMenu";
import React from "react";
import Home from "./Home";
import SignUp from "./SignUp";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Event from "./event";
import Schedule from "./components/SheduleComponent";
import NewEvent from "./components/newEvent";
import ScheduleEvent from "./components/ScheduleEvent";

const Root = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography).attrs({
  variant: "title",
  color: "inherit"
})`
  && {
    font-size: 2em;
    flex-grow: 1;
    font-weight: 100;
    text-transform: uppercase;
  }
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("email");

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends React.Component {
  state = {
    isAuthenticated: null
  };
  componentDidMount() {
    const isAuthenticated = localStorage.getItem("email");
    this.setState({ isAuthenticated });
  }

  login = () => {
    this.setState({ isAuthenticated: true });
  };
  logout = () => {
    localStorage.clear();
    this.setState({ isAuthenticated: false });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <MenuAppBar
          isAuthenticated={this.state.isAuthenticated}
          logout={this.logout}
          {...this.props}
        />
        <Switch location={this.props.location}>
          <Route
            path="/"
            exact
            render={props => (
              <Home isAuthenticated={this.state.isAuthenticated} {...props} />
            )}
          />

          <PrivateRoute path="/event/user/me" exact component={Event} />
          <PrivateRoute path="/event/new" exact component={NewEvent} />
          <PrivateRoute
            path="/event/schedule/me"
            exact
            component={ScheduleEvent}
          />
          <PrivateRoute path="/:id/:id2" exact component={Schedule} />

          <Route
            path="/signUp"
            exact
            render={props => <SignUp login={this.login} {...props} />}
          />
          <Route
            path="/login"
            exact
            render={props => <SignUp login={this.login} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const MenuAppBar = props => {
  const { isAuthenticated: authed } = props;
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title>C</Title>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/event/schedule/me">Schedule Metting</NavLink>
          {!authed && (
            <>
              <NavLink to="/signup">SignUp</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}

          {authed && <NavMenu logout={props.logout} />}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default withRouter(App);
