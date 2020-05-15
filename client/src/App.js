import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import HomePage from "./views/HomePage/HomePage";
import OrganiserLogin from "./views/Organisers/organiserLogIn";
import UserLogin from "./views/Users/userLogIn";
import AboutUs from "./views/AboutUs/aboutUs";
import OrganiserSignup from "./views/Organisers/organiserSignUp";

var hist = createBrowserHistory();

function App(){

    return(
    <Router history={hist}>
        <div className="App">
        <Switch>
        <Route path="/user-login" component={UserLogin} />
            <Route path="/organiser-login" component={OrganiserLogin} />
            <Route path="/organiser-signup" component={OrganiserSignup} />
            <Route path="/" component={HomePage} />
            <Route path="/about-us" component={AboutUs} />
        </Switch>
        </div>
    </Router>
    );
}
export default App;