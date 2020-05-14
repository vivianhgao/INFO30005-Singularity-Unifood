import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import HomePage from "./views/HomePage/HomePage";
import OrganiserLogin from "./views/Organisers/OrganiserLogin";
import UserLogin from "./views/Users/UserLogin";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/user-login" component={UserLogin} />
            <Route path="/organiser-login" component={OrganiserLogin} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
