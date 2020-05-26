import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import HomePage from "./views/HomePage/HomePage";
import OrganiserLogin from "./views/Organisers/organiserLogIn";
import UserLogin from "./views/Users/userLogIn";
import UserSignUp from './views/Users/userSignUp';
import UserDashboard from './views/Users/userHomePage';
import UserDetails from './views/Users/userDetails';
import AboutUs from "./views/AboutUs/aboutUs";
import OrganiserSignup from "./views/Organisers/organiserSignUp";
import OrganiserHomePage from "./views/Organisers/organiserHomePage";


var hist = createBrowserHistory();

export default function App(){
    


        return(
        <Router history={hist}>
            <div className="App">
            <Switch>
                <Route path="/userdetails" component={UserDetails}/>
                <Route path="/userdashboard" component={UserDashboard}/>
                <Route path="/usersignup" component={UserSignUp} />
                <Route path="/userlogin" component={UserLogin} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/organiser" component={OrganiserLogin} />
                <Route path="/organisersignup" component={OrganiserSignup} />
                <Route path="/organiserhome" component={OrganiserHomePage} />
                <Route path="/" component={HomePage} />
            </Switch>
            </div>
        </Router>
        );
    
}

