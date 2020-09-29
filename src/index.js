import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Notifications from 'react-notify-toast';
// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import login from 'views/Login/Login';

const hist = createBrowserHistory();

// var logged = await validLogin();
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
  

// ):(
//   ReactDOM.render(
//     <Router history={hist}>
//       <Switch>
//         <Route path="/"  component={Admin}/>
//           <Redirect from="/" to="/dashboard/actual"  />
//       </Switch>
//     </Router>,
//     document.getElementById("root")
//   )
// )


