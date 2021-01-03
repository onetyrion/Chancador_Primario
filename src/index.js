import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Notifications from 'react-notify-toast';
// core components
import Admin from "layouts/Admin1.js";
import login from 'views/Login/Login';
//styles
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login"  component={login}/>      
      <Route path="/"  component={Admin}/>
    </Switch>
  <Notifications />
  </Router>
  ,document.getElementById("root")
)