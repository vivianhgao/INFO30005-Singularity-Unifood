
import React, {useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import './orgaccmgmt.css'

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {Link, useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import io from "socket.io-client";
import socketIOClient from "socket.io-client";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import profile from "../../assets/img/faces/unifood_logo.png";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardBody from "../../components/Card/CardBody";

//icons
import UpdateIcon from '@material-ui/icons/Update';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import OrganiserUpdate from "./organiserUpdateAccount";

const useStyles = makeStyles(styles);
var socket = io();



export default function OrganiserHomePage(props) {

    let history = useHistory();
    const location = useLocation();
    const id = location.state.id;
    const organisation_name = location.state.orgName;

    const classes = useStyles();
    const { ...rest } = props;

    function logOut(){
        history.push({pathname:'/'})
    }

    const updateAccount = () =>{
        let path = '/organiser-account';
        history.push(path);
    }
    const viewForms = () =>{
        let path = '/all-listings';
        history.push(path);
    }
    const deleteAccount = () =>{
        let path = '/organiser-account';
        history.push(path);
    }

    const organiserUpdate = () =>{
        let path = '/organiser/update';
        history.push(path);
    }

    const postForm = () =>{
        let path = '/post-new-form';
        history.push(path);
    }

    return (



        <div>
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
            <Parallax small filter image={require("assets/img/aboutus-bg.png")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>


                    <div className={classes.container}>


                        <div className='option'>
                            <div className='label'>
                                Welcome {organisation_name}
                                <br></br>
                            </div>
                        </div>

                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>

                                <GridItem container justify="center">
                                    <strong><h3>Form Management</h3></strong>
                                </GridItem>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    color="danger"
                                    target="_blank"
                                    startIcon={<AddIcon />}
                                    onClick={postForm}
                                    round
                                >
                                    <h5><strong>Post New Form</strong></h5>
                                </Button>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    color="danger"
                                    target="_blank"
                                    startIcon={<ClearAllIcon />}
                                    onClick={viewForms}
                                    round
                                >
                                    <h5><strong>View My Forms</strong></h5>
                                </Button>


                                <GridItem container justify="center">
                                    <strong><h3>Account Management</h3></strong>
                                </GridItem>


                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    target="_blank"
                                    startIcon={<UpdateIcon />}
                                    onClick={organiserUpdate}
                                >
                                    <strong>Update Account</strong>
                                </Button>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    target="_blank"
                                    startIcon={<DeleteIcon />}
                                >
                                    <strong>Delete Account</strong>
                                </Button>


                                <GridItem container justify="center">
                                <Button
                                    variant="contained"
                                    size="small"
                                    target="_blank"
                                    startIcon={<KeyboardReturnIcon />}
                                    onClick={() => {history.goBack()}}
                                    round
                                >
                                    <strong>Back</strong>
                                </Button>
                                </GridItem>




                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}














