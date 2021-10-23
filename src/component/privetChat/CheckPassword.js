import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";



function CheckPassword() {

  const classes = useStyle();
  
   

  
  
  return (
    <Grid container direction={"column"} className={classes.root}>
        <Typography className={classes.titleText}>لطفا رمز 6 رقمی را وارد کنید</Typography>
        <Grid container item className={classes.passwordDiv}>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
            <input type={"number"} className={classes.passwordChar + ' passwordChat'} maxLength={"1"}/>
        </Grid>
        <Button className={classes.loginBtn}>
            وارد شوید
        </Button>
    </Grid>
  );
}

export default CheckPassword;


