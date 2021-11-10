
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { setMobileState, useChatDispatch } from "../../chatPage/context/chatContext";
import useStyle from "../styles";


function HeaderDefault() {
  const classes = useStyle();

  const chatDispatch = useChatDispatch();
  const chatRooms = () => {
   setMobileState(chatDispatch , "groups");
  }
  return (
    <>
        <Grid container item className={classes.rightHeader}>
            <ButtonBase className={classes.headerTitle} onClick={chatRooms}>پیام ها <span className={classes.crlUnSeenMessageAll}>3</span>
            </ButtonBase>
        </Grid>
        <Grid container item className={classes.leftHeader}>
            <Typography className={'cl'}>
                <Link to={"/"}>
                    <ButtonBase>
                        <img src={"/images/blueExit.png"} alt={"exit"}/>
                    </ButtonBase>
                </Link>
            </Typography>
        </Grid>
    </>
  );
}

export default HeaderDefault;


