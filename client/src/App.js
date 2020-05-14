import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import SignUp from './components/SignUp';

function App() {
  return (
    
    <Router>
       <div className="App">
       <Header/>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
      </Switch>
      </div>

    </Router>
   
     
      
   
  );
}

export default App;
