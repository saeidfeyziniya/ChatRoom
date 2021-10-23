
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import { resetAddGroupStates, useNewGroupDispatch, useNewGroupState } from "../plusSection/context/NewGroupContext";
import useStyle from "./styles";

function ShareSection() {

  const newGroupDispatch = useNewGroupDispatch();

  const classes = useStyle();

  const test = () => {
    resetAddGroupStates(newGroupDispatch);
    }
  return (
    <Grid container direction={"column"} className={classes.shareDiv}>
      <Grid container item className={classes.shareBackDiv}>
          <ButtonBase style={{width:'max-content',height:'max-content'}} onClick={test}>
            <img src={"/images/backImg.png"} alt={"back page"} className={classes.backImg} />
          </ButtonBase>
      </Grid>
      <Grid container item className={classes.shareMessageDiv} direction={"column"}>
        
        <img src={"/images/share.png"} alt={"share"} className={classes.shareImg}/>
        <Typography className={classes.copyText}>لینک با موفقیت کپی شد</Typography>
        
      </Grid>

    </Grid>
  );
}

export default ShareSection;
