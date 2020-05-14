import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>About Unifood</h1>
          <h5 className={classes.description}>
            Our proposed application will be an interface that connects event organisers with excess food
            to users in the surrounding area through a location-based notification system.
            We have determined an existing messaging platform will integrate seamlessly with the lives
            of our users and have chosen Facebook Messenger to deliver the notifications. Furthermore, we
            have identified the following goals we want to address throughout our implementation:
            <p></p>
            • To serve as a contingency for event organisers when there is surplus food and reduce waste
            of edible food.
            <p></p>
            • To be as user-friendly as possible for both users and organisers by integrating well with
            existing protocols for event organisers and daily practices of users.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
