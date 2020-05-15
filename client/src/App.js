import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import HomePage from "./views/HomePage/HomePage";
import OrganiserLogin from "./views/Organisers/organiserLogIn";
import UserLogin from "./views/Users/userLogIn";
import UserSignUp from './views/Users/userSignUp';
import LandingPage from "./views/Users/LandingPage/LandingPage";
import UserDashboard from './views/Users/userHomePage'

var hist = createBrowserHistory();

function App(){

    return(
    <Router history={hist}>
        <div className="App">
        <Switch>
            <Route path="/userdashboard" component={UserDashboard}/>
            <Route path="/usersignup" component={UserSignUp} />
            <Route path="/userlogin" component={UserLogin} />
            <Route path="/organiserlogin" component={OrganiserLogin} />
            <Route path="/" component={HomePage} />
            
        </Switch>
        </div>
    </Router>
    );
}
export default App;