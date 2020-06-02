import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import './orgupdate.css';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem";
import axios from 'axios';

import swal from 'sweetalert';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import People from "@material-ui/icons/People";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import { useLocation, useHistory } from "react-router-dom";

import './organiser.css'
const useStyles = makeStyles(styles);
const endpoiupdate="http://localhost:5000";

export default function OrganiserUpdate(props) {

    let history = useHistory();
  const location = useLocation();
  const id=location.state.id;
  const organisation_name = location.state.orgName;
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [contactNumber,setContactNumber]= useState("")
    const [officerName,setOfficerName]=useState("")
    const [organiserName,setOrganiserName]= useState("")
    
    console.log("IDDD: "+id);


    const classes = useStyles();
    const { ...rest } = props;

    function updateAccount(ev){
        ev.preventDefault();

        axios.post('/organisers/update/'+id,
        {
            organisation_name: organiserName,
            officer_name: officerName,
            contact_number: contactNumber,
            email: email,
            password: password
        })
        .then(res => {
            if (res.data.success){
                alert("Account updated.");
                history.push(
                    '/organisers/home',
                    {
                        orgName:organiserName,
                        id:res.data.organiser._id,
                        // organiser: res.data.organiser
                    }
                );
            } else {
                alert("Update account failed.")
            }
        });
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

                            
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>

                                <GridItem container justify="center">
                            <strong><h3>Update {organisation_name} Account</h3></strong>
                                </GridItem>

                                <CustomInput
                                            labelText="Organiser Name"
                                            id="organisationName"
                                            value={organiserName}
                                            require={true}
                                            variant="outlined"
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleOrganisationName(event)
                                              }}
                                            inputProps={{
                                                type: "text",
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <People />
                                                  </InputAdornment>
                                              )
                                        }}
                                        />
                                        <CustomInput
                                            labelText={"Officer Name"}
                                            id="officerName"
                                            value={officerName}
                                            variant="outlined"
                                            formControlProps={{fullWidth: true,
                                            onChange: (event)=>handleOfficerName(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PersonIcon className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Contact Number"
                                            id="contactNumber"
                                            value={contactNumber}
                                            variant="outlined"
                                            formControlProps={{fullWidth: true,
                                            onChange: (event)=>handleContactNumber(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <ContactPhoneIcon className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText={"Email"}
                                            id="email"
                                            value={email}
                                            variant="outlined"
                                            formControlProps={{fullWidth: true,
                                            onChange: (event)=>handleEmail(event)
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <EmailIcon className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="password"
                                            value={password}
                                            variant="outlined"
                                            formControlProps={{fullWidth: true,
                                            onChange: (event)=>handlePassword(event)
                                            }}
                                            inputProps={{

                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <VpnKeyIcon className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />

                                        <div style={{float:"right"}}>
                                            <Button
                                                // className='updateButton'
                                                variant="outlined"
                                                size="md"
                                                onClick={()=>history.goBack()}
                                            >
                                                Cancel
                                            </Button>
                                 
                                            <Button
                                                variant="outlined"
                                                color="danger"
                                                size="md"
                                                onClick={updateAccount}
                                            >
                                                Update Account
                                            </Button>
                                        </div>

                            </GridItem>
                        </GridContainer>


    </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
)
}


