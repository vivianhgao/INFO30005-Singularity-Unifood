// import React from 'react';
// import Header from './Header';
// import {Link,BrowserRouter as Router} from 'react-router-dom';



// export default function Home(){
//     return( 
//         <div>
//             <Header/>
//             <div className='content'>
//                 <Router>
//                     <Link to="./Login" className="btn btn-primary">Log in</Link>
//                 </Router>
                
//             </div>
//         </div>
//     );

// }
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
  return (
      <div className="Home">
        <div className="lander">
          <h1>Unifood</h1>
          <p>Where there are free food available at uni</p>
          <Link to='/login'>A user? click here</Link>
        </div>
      </div>
    );
  }
}
