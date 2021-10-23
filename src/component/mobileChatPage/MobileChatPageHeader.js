
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";


function MobileChatPageHeader() {
  const classes = useStyle();
  return (
    <Grid container direction={"column"} className={classes.chatPageHeader}>
        <Grid container item className={classes.rightHeader}>
            <Typography className={classes.headerTitle}>پیام ها <span className={classes.crlUnSeenMessageAll}>3</span>
            </Typography>
        </Grid>
        <Grid container item className={classes.leftHeader}>
            <Typography className={'cl'}>
                <ButtonBase>
                    <img src={"/images/blueExit.png"} alt={"exit"}/>
                </ButtonBase>
            </Typography>
        </Grid>
    </Grid>
  );
}

export default MobileChatPageHeader;


