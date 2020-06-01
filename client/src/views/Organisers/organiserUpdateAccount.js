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
import axios from 'axios';

import swal from 'sweetalert';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useLocation, useHistory } from "react-router-dom";

import './organiser.css'
const useStyles = makeStyles(styles);
const endpoiupdate="http://localhost:5000";

export default function OrganiserUpdate(props) {

    let history = useHistory();
//   const location = useLocation();
//   const id=location.state.id;
//   const organisation_name = location.state.orgName;
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [contactNumber,setContactNumber]= useState("")
    const [officerName,setOfficerName]=useState("")
    const [organiserName,setOrganiserName]= useState("")



    const classes = useStyles();
    const { ...rest } = props;

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

    function updateAccount() {
        axios.post('/organisers/update')
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

            <Parallax small filter image={require("assets/img/userdashboard.png")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <div class='container'>
                                <div class="heading">
                                    Post New Event Listing
                                </div>

                            <GridContainer justify="center" >
                                <Grid item xs={5} justify="center">
                                    <div class='container'>
                                        <CustomInput
                                            labelText={"hello"}
                                            id="email"
                                            value={email}
                                            variant="outlined"
                                            formControlProps={{fullWidth: true,
                                            onChange: (event)=>handleEmail(event)
                                            }}
                                            inputProps={{
                                                type: "text",
                                                // endAdornment: (
                                                //     <InputAdornment position="end">
                                                //         <EmailIcon className={classes.inputIconsColor} />
                                                //     </InputAdornment>
                                                // )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Organiser Name"
                                            id="organisationName"
                                            value={organiserName}
                                            variant="outlined"
                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleOrganisationName(event)
                                              }}
                                            inputProps={{
                                                type: "text",
                                            //   endAdornment: (
                                            //       <InputAdornment position="end">
                                            //           <People className={classes.inputIconsColor} />
                                            //       </InputAdornment>
                                            //   )
                                        }}
                                        />
                                        <div>
                                            <button onClick={()=>updateAccount()}>
                                                Update
                                            </button>
                                            <Button className='updateButton'
                                                variant="outlined"
                                                color="danger"
                                                size="sm"
                                                onClick={()=>updateAccount()}
                                            >
                                                Update Account
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="danger"
                                                size="sm"
                                                onClick={()=>updateAccount()}
                                            >
                                                Update Account
                                            </Button>
                                        </div>


    {/* <CardFooter className={classes.cardFooter} style={{justifyContent: 'center'}}>
                                      <Button
                                        variant="outlined"
                                        color="danger"
                                        size="lg"
                                        onClick={()=>updateAccount()}
                                        >
                                          Update Account
                                      </Button>
                                  </CardFooter> */}


</div>
    </Grid>
    </GridContainer>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
)
}