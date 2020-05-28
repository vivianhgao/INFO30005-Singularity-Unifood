import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import red from '@material-ui/core/colors/red';
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "material-ui-core/TextField";
import Checkbox from '@material-ui/core/Checkbox';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/unifood.png";

import {useHistory} from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import axios from 'axios';

const useStyles = makeStyles(styles);

export default function OrganiserSignup(props) {
    let history = useHistory()
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    const [organiserName,setOrganiserName]= useState("")
    const [officerName,setOfficerName]=useState("")
    const [contactNumber,setContactNumber]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")

    // organisation_name: req.body.organisation_name,
    //     officer_name: req.body.officer_name,
    //     contact_number: req.body.contact_number,
    //     email: req.body.email,
    //     password

    function validateSignUp(ev){
        ev.preventDefault(); // Let's stop this event.
        axios.post(
            '/organisers/signup',
            {
                organisation_name: organiserName,
                officer_name: officerName,
                contact_number: contactNumber,
                email: email,
                password: password})
            .then(res => res.data.success? history.push({pathname:'/organiserhome'}) : alert("Please Try again"))
            .catch();
    }

    const handleOrganisationName = (event) => {
        setOrganiserName(event.target.value);
    };

    const handleOfficerName = (event) => {
        setOfficerName(event.target.value);
    };

    const handleContactNumber = (event) => {
        setContactNumber(event.target.value);
    };

    const handleEmail = (event) => {
        console.log(email);
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="UNIFOOD"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="danger" className={classes.cardHeader}>
                                        <h4>Organiser Sign Up</h4>
                                    </CardHeader>

                                    <CardBody>

                                        <TextField
                                            id="standard-full-width"
                                            label="Organisation Name"
                                            style={{ margin: 8 }}
                                            placeholder="Hungers Association"
                                            // helperText="Required"
                                            fullWidth
                                            required={true}
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleOrganisationName}
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Officer Name"
                                            style={{ margin: 8 }}
                                            placeholder="Name"
                                            // helperText="Required"
                                            required={true}
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleOfficerName}
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Contact Number"
                                            style={{ margin: 8 }}
                                            placeholder="411000222"
                                            // helperText="Required"
                                            fullWidth
                                            required={true}
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleContactNumber}
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Email"
                                            style={{ margin: 8 }}
                                            placeholder="admin@organisation.com"
                                            // helperText="Required"
                                            required={true}
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleEmail}
                                        />
                                        <TextField
                                            id="standard-full-width"
                                            label="Password"
                                            style={{ margin: 8 }}
                                            placeholder="Password"
                                            // helperText=""
                                            fullWidth
                                            required={true}
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handlePassword}
                                        />
                                        {/*<CustomInput*/}
                                        {/*    labelText="email"*/}
                                        {/*    id="email"*/}
                                        {/*    value={email}*/}

                                        {/*    formControlProps={{*/}
                                        {/*        fullWidth: true,*/}
                                        {/*        onChange: (event)=>handleEmail(event)*/}
                                        {/*    }}*/}

                                        {/*    inputProps={{*/}
                                        {/*        type: "email",*/}
                                        {/*        endAdornment: (*/}
                                        {/*            <InputAdornment position="end">*/}
                                        {/*                <People className={classes.inputIconsColor} />*/}
                                        {/*            </InputAdornment>*/}
                                        {/*        )*/}
                                        {/*    }}*/}
                                        {/*/>*/}

                                        {/*<CustomInput*/}
                                        {/*    labelText="email"*/}
                                        {/*    id="email"*/}
                                        {/*    value={email}*/}

                                        {/*    formControlProps={{*/}
                                        {/*        fullWidth: true,*/}
                                        {/*        onChange: (event)=>handleEmail(event)*/}
                                        {/*    }}*/}

                                        {/*    inputProps={{*/}
                                        {/*        type: "email",*/}
                                        {/*        endAdornment: (*/}
                                        {/*            <InputAdornment position="end">*/}
                                        {/*                <People className={classes.inputIconsColor} />*/}
                                        {/*            </InputAdornment>*/}
                                        {/*        )*/}
                                        {/*    }}*/}
                                        {/*/>*/}


                                        {/* <FormControl>
                                          <InputLabel>Username</InputLabel>
                                          <Input id="username" type="text" value={username} onChange={handleUsername}disableUnderline={true}/>
                                        </FormControl>

                                        <br/>
                                        <FormControl>
                                          <InputLabel>Password</InputLabel>
                                          <Input id="username" type="password" value={password} onChange={handlePassword}/>
                                        </FormControl> */}



                                        {/*<CustomInput*/}
                                        {/*    labelText="Password"*/}
                                        {/*    id="password"*/}
                                        {/*    type="password"*/}
                                        {/*    // onChange={ (event)=>handlePassword(event)}*/}

                                        {/*    formControlProps={{*/}
                                        {/*        fullWidth: true,*/}
                                        {/*        onChange: (event)=>handlePassword(event)*/}

                                        {/*    }}*/}
                                        {/*    inputProps={{*/}
                                        {/*        // onChange: (event)=>handlePassword(event),*/}

                                        {/*        type: "password",*/}

                                        {/*        endAdornment: (*/}
                                        {/*            <InputAdornment position="end">*/}
                                        {/*                <Icon className={classes.inputIconsColor}>*/}

                                        {/*                </Icon>*/}
                                        {/*            </InputAdornment>*/}
                                        {/*        ),*/}
                                        {/*        autoComplete: "off"*/}
                                        {/*    }}*/}


                                        {/*/>*/}

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            color="danger"
                                            onClick={validateSignUp}
                                            className={classes.submit}
                                        >
                                            Sign Up
                                        </Button>

                                    </CardBody>



                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
