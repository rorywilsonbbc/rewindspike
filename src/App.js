import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Grid } from "react-bootstrap";

import { Navigation } from "./components";
import { Auth } from "./services";
import { Home, About, Search, NoMatch, Login } from "./pages";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Grid>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/search" component={Search} />
          <Route component={NoMatch} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
