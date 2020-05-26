
import React, {useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import socketIOClient from "socket.io-client";

import './organiser.css'
const useStyles = makeStyles(styles);
const endpoint="http://localhost:5000";

export default function OrganiserHomePage(props) {

  let history = useHistory();
  const [userLat, setUserLat] = useState(Number);
  const [userLong, setUserLong] = useState(Number);
  const [allData, setAllData]=useState([]);
  const [newData, setNewData]=useState([]);
  const [notifyData, setNotifyData]=useState([]);
  const [incomingData, setIncomingData]=useState([]);
  const [forms, setForms] = useState([]);
// var notifyData = [];

  const classes = useStyles();
  const { ...rest } = props;

  //
  // function goUserDetails(){
  //   history.push({pathname:'/userdetails',state:{detail:username}});
  // }
  //
  // function logOut(){
  //   history.push({pathname:'/'})
  // }

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
        <div className='grid-menu'>
            <div className="option">
                <div className='greeting'>
                    Hi
                </div>
                <div className='button'>

                    <Button simple color="danger" size="md" >
                        <div className='writing'>
                            Account details
                        </div>
                    </Button>

                    <Button simple color="danger" size="md" >
                        <div className='writing'>
                            Log out
                        </div>
                    </Button>
                </div>
            </div>
            <div class="item">
                    <div class='label'>
                        Post New Form
                    </div>
                    <br/>
                    
            </div>
            <div class="item">
                <div class='label'>
                    Manage Accounts and Forms
                </div>
                <br/>
            </div>

            <div class="item">
                    <div class='label'>
                        Update Account
                    </div>
                    <br/>
                    
            </div>
            <div class="item">
                <div class='label'>
                    Delete ccount
                </div>
                <br/>
            </div>
     
          {/* <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div> */}

        </div>
      <Footer />
    </div>

  );
}


