import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import UserLogin from "./views/Users/userLogIn";
import UserSignUp from './views/Users/userSignUp';
import UserDashboard from './views/Users/userHomePage';
import UserDetails from './views/Users/userDetails';
//organiser pages
import OrganiserLogin from "./views/Organisers/organiserLogIn";
import OrganiserSignup from "./views/Organisers/organiserSignUp";
import OrganiserHomePage from "./views/Organisers/organiserHomePage";
import OrganiserAccMgmt from "./views/Organisers/organiserAccountManagement";

//forms pages
import PostNewForm from "./views/Forms/formCreateNew";
import ViewAllForms from "./views/Forms/formViewAll";
//home pages
import AboutUs from "./views/HomePage/aboutUs";
import HomePage from "./views/HomePage/HomePage";


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
                <Route path="/organiser-account" component={OrganiserAccMgmt} />

                <Route path="/all-listings" component={ViewAllForms} />

                <Route path="/post-new-form" component={PostNewForm} />

                <Route path="/" component={HomePage} />
            </Switch>
            </div>
        </Router>
        );
    
}



