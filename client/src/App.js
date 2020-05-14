import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import { Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function App() {
    const [response, setResponse] = useState("");

        useEffect (()=> {
            const socket = socketIOClient(ENDPOINT);
            socket.on("FromAPI", data => {
                console.log("Got signal from server");
                setResponse(data);
            });
        }, []
        );
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

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />

//         {/* the content */}
//         {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           <Route path="/authors">
//             <Authors />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
// import "./App.css";

// function App() {
//   return (
//     <div className="App container">
//       <Navbar fluid collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Scratch</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//       </Navbar>
//     </div>
//   );
// }

export default App;