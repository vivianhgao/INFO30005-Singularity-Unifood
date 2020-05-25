import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

// import './userDetails.css'

import { useLocation } from "react-router-dom";
import { useHistory }  from 'react-router-dom';
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

const useStyles = makeStyles(styles);

export default function PostNewForm(props) {
    const location = useLocation();
    let history = useHistory()

    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [address,setAddress]=useState("")
    const [time,setTime]= useState("")
    const [quantity,setQuantity]=useState("")
    const [photo,setPhoto]=useState("")
    const [latitude,setLatitude]=useState("")
    const [longitude,setLongitude]=useState("")



    const classes = useStyles();
    const { ...rest } = props;

    function createForm(){
        axios.post(
            'form/createForm',
            {name,description,address,time,quantity,photo,latitude,longitude})
            .then(res => res.data.success? console.log("New form posted!"): alert("Error, please try again!"))
    }

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleTime = (event) => {
        setTime(event.target.value);
    };
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };
    const handlePhoto = (event) => {
        setPhoto(event.target.value);
    };
    const handleLatitude = (event) => {
        setLatitude(event.target.value);
    };
    const handleLongitude = (event) => {
        setLongitude(event.target.value);
    };

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
            <Parallax small filter image={require("assets/img/userdashboard.png")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <div class='container'>
                            <div class="heading">
                                Post New Form
                            </div>

                            <GridContainer justify="center" >
                                <Grid item xs={5} justify="center">
                                    <div class='container'>
                                        <CustomInput
                                            labelText="Organisation and Event Name*"
                                            id="name"
                                            value={name}
                                            variant="outlined"
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleName(event)

                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />


                                        <CustomInput
                                            labelText="Description*"
                                            id="description"
                                            value={description}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleDescription(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="Address*"
                                            id="address"
                                            value={address}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleAddress(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="Time*"
                                            id="time"
                                            value={time}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleTime(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="Quantity"
                                            id="quantity"
                                            value={quantity}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleQuantity(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="Photo"
                                            id="photo"
                                            value={photo}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handlePhoto(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="Latitude"
                                            id="latitude"
                                            value={latitude}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleLatitude(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />

                                        <CustomInput
                                            labelText="longitude"
                                            id="longitude"
                                            value={longitude}
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleLongitude(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                            }}
                                        />




                                    </div>



                                    <CardFooter className={classes.cardFooter} style={{justifyContent: 'center'}}>
                                        <Button variant="outlined" color="danger" size="lg" onClick={()=>createForm()}>
                                            Post New Form
                                        </Button>
                                    </CardFooter>

                                </Grid>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
