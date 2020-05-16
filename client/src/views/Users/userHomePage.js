
import React, {useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import './userhome.css'

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import socketIOClient from "socket.io-client";

const useStyles = makeStyles(styles);
const endpoint="http://localhost:5000";


export default function UserDashboard(props) {
let history = useHistory()
const location = useLocation();
const username=location.state.detail;
const [notification, setNotifications]=useState([])
const [forms,setForms]=useState([])
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

  useEffect(()=>{
    const socket=socketIOClient(endpoint);
    socket.on("Notifications", data=>setNotifications(data))
    socket.on("Forms",data=>setForms(data))
  });

  function goUserDetails(){
    history.push({pathname:'/userdetails',state:{detail:username}});
  }

  function logOut(){
    history.push({pathname:'/'})
  }

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

  function getDistance() {
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
        <Parallax small filter image={require("assets/img/userdashboard.png")} >
    
        </Parallax>
        <br/>
      
        <div  class='grid-container' >
            <div class="option">
                <div class='greeting'>
                    Hi {first_name}!
                  </div>
                  <div class='button'>
                    <Button simple color="danger" size="md" onClick={()=>goUserDetails()}>
                      <div class='writing'>
                          Account details
                        </div>
                    </Button>

                    <Button simple color="danger" size="md" onClick={()=>logOut()}>
                      <div class='writing'>
                          Log out
                        </div>
                    </Button>
                    </div>
                </div>
            
                <div class="notifs">
                    <div class='label'>
                        Notification
                    </div>
                    <br/>
                    {notification.map(res=>(
                        <div key={res.id}>
                            <div class='notifBox'>
                                New Entry from {res.name}!<br/>
                                At {res.address} <br/>
                                Time: {res.time}<br/>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="allForms">
                    <div class='label'>
                        Open Forms
                    </div> 
                    <br/>
                    {forms.map(res=>(
                        <div key={res.id}>
                            <div class='formBox'>
                                New Entry from {res.name}!<br/>
                                At {res.address} <br/>
                                Time: {res.time}<br/>
                            </div>
                        </div>
                    ))} 
                 
            </div>
        </div>
    <Footer />
    </div>
    
);
}

