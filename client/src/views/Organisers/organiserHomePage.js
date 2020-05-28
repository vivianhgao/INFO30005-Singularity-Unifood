
import React, {useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import socketIOClient from "socket.io-client";
import { sizing } from '@material-ui/system';


import './organiser.css'
const useStyles = makeStyles(styles);
const endpoint="http://localhost:5000";

export default function OrganiserHomePage(props) {

  let history = useHistory();
  const location = useLocation();
  const id=location.state.id;
  const organisation_name = location.state.orgName;


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


  const postForm = () =>{ 
    let path = '/post-new-form'; 
    history.push(path);
  }

  const manageAccount = () =>{ 
    let path = '/organisers/account'; 
    history.push(path, {id:id, orgName: organisation_name});
  }


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

      <div className='grid-organiser'>

        <div className='option'>
          <div className='label'>
          Welcome {organisation_name}
          </div>
        </div>
          {/* <Link to={"/organiser"} className='buttonOrg1 shadow'> */}

            <button  className='buttonOrg1 shadow' onClick={postForm}>
              Post a form
            </button>
          

          <button className='buttonOrg2 shadow' onClick={manageAccount}>
            Manage form or account
          </button>
        
      </div>
      <br>
      </br>
      <Footer />
    </div>
  );
}


