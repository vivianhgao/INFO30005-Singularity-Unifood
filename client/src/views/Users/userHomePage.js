
import React, {useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Grid from '@material-ui/core/Grid'
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Box from '@material-ui/core/Box';
import socketIOClient from "socket.io-client";
const useStyles = makeStyles(styles);

const endpoint="http://localhost:5000";


export default function ProfilePage(props) {
let history = useHistory()
const location = useLocation();
const username=location.state.detail;
const [response, setResponse]=useState([])
const [first_name,setFirstName]=useState();
const [userLat, setUserLat] = useState(Number);
const [userLong, setUserLong] = useState(Number);
const [eventLat, setEventLat] = useState(Number);
const [eventLong, setEventLong] = useState(Number);
const [distance, setDistance] = useState(Number);

  const classes = useStyles();
  const { ...rest } = props;

  function getFirstName(){
    axios.get("/users/login/"+username)
    .then(res=>setFirstName(res.data.user.first_name))
    
    
  }

//   useEffect(()=>{
//       const socket=socketIOClient(endpoint);
//       socket.on("FromAPI", data=>data.map());
//   },[]);
  function getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLat(position.coords.latitude);
        setUserLong(position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported in this browser");
    }
  }

  function distance() {
    if ((userLat == eventLat) && (userLong == eventLong)) {
      return 0;
    } else {
      var radlat1 = Math.PI * userLat / 180;
      var radlat2 = Math.PI * eventLat / 180;
      var theta = userLong - eventLong;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;

      setDistance(dist);
      return dist;
    }
  }
  getFirstName();
  
  return ( 
      
    <div >
      <Header
        color="transparent"
        brand="UNIFOOD"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/unifood.png")} >
            <div style={{color:'white',fontSize:40, fontWeight:'bold'}}><br/>
                Hi {first_name}!
            </div>
        </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
              
            <Grid container>
                
                
              <Grid item xs={1}  className={classes.navWrapper} >
                  <p>{response}</p>
               
              </Grid>
              <Grid item xs={11} className={classes.navWrapper} >
                  right
                  </Grid>
            </Grid>
            {/* <Grid container>
                <Grid item xs={3}> 
                left 
                </Grid>
                
                <Grid item xs={9}>
                ...right
                </Grid>
            </Grid> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

