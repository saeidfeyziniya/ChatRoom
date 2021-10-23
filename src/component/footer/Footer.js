import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";


function Footer() {
    const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      
      <Typography className={classes.footerText}>طراحی شده با عشق در پیچاز</Typography>
    </Grid>
  );
}

export default Footer;