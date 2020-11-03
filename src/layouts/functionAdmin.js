import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const switchRoutes = (routes ) =>{
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