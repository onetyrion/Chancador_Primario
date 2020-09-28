import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

export function switchRoutes(routes, loginUserAPI ) {
    if (window.location.pathname === '/dashboard/actual/login') {
    loginUserAPI()
    .then(()=>{
        console.log("Se ha logeado con el token: 1")
        window.location.pathname ='/dashboard/actual/'
    })
    }
    return (
        <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/") {
            return (
                <Route
                path={prop.layout+prop.path}
                component={prop.component}
                key={key}
                />
                // <p>{prop.path}</p>
                )}
                return null;
            })
            }
        <Redirect from="/" to="/dashboard/actual" />
        </Switch>
    )
}