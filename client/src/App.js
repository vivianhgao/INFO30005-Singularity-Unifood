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
import OrganiserUpdate from "./views/Organisers/organiserUpdateAccount";
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
                <Route path="/user/home" component={UserDashboard}/>
                <Route path="/usersignup" component={UserSignUp} />
                <Route path="/userlogin" component={UserLogin} />
          
                <Route path="/organisers/home" component={OrganiserHomePage} />
                <Route path="/organisers/account" component={OrganiserAccMgmt} />
                <Route path="/organisers/login" component={OrganiserLogin} />
                <Route path="/organisers/signup" component={OrganiserSignup} />
                <Route path="/organisers/update" component={OrganiserUpdate} />


                <Route path="/about-us" component={AboutUs} />

                <Route path="/all-listings" component={ViewAllForms} />

                <Route path="/post-new-form" component={PostNewForm} />

                <Route path="/" component={HomePage} />
            </Switch>
            </div>
        </Router>
        );
    
}



