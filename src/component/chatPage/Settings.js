import { ButtonBase, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { setLeftSectionState, useNewGroupDispatch } from "../plusSection/context/NewGroupContext";
import useStyle from "./styles";

function Settings() {
  const classes = useStyle();

  const leftSectionDispatch = useNewGroupDispatch();

  const pulsSection = () =>{
    setLeftSectionState(leftSectionDispatch,"plusSection");
    
  }
  const shareSection = () =>{
    setLeftSectionState(leftSectionDispatch,"shareSection");
    
  }
  
  return (
    <Grid container direction={"column"} className={classes.stDiv}>
        <Grid container item className={classes.stBtn}>
          
            <ButtonBase onClick={pulsSection}>
              <img src={"/images/plus.png"} alt={"create group"} className={classes.stImages}/>
            </ButtonBase>
          
        </Grid>
        <Grid container item className={classes.stBtn}>
            <ButtonBase onClick={shareSection}>
              <img src={"/images/share.png"} alt={"share"} className={classes.stImages}/>
            </ButtonBase>
        </Grid>
        <Grid container item className={classes.stBtn}>
          <Link to={"/"}>
            <ButtonBase>
              <img src={"/images/exit.png"} alt={"exit"} className={classes.stImages}/>
            </ButtonBase>
          </Link>
        </Grid>
    </Grid>
  );
}

export default Settings;


