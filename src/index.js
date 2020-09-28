import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import login from 'views/Login/Login';
const hist = createBrowserHistory();
true ? (
  ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/login"  component={login}/>
          <Redirect from="/" to="/login"  />
        <Route path="/"  component={Admin}/>
      </Switch>
    </Router>
    ,
    document.getElementById("root")
  )
):(
  ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/"  component={Admin}/>
          <Redirect from="/" to="/dashboard/actual"  />
      </Switch>
    </Router>,
    document.getElementById("root")
  )
)


