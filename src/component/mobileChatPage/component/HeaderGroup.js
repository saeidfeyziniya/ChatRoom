
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import { setMobileState, useChatDispatch, useChatState } from "../../chatPage/context/chatContext";
import { setLeftSectionState, useNewGroupDispatch, useNewGroupState } from "../../plusSection/context/NewGroupContext";
import useStyle from "../styles";


function HeaderGroup() {
  const classes = useStyle();

  const chatDispatch = useChatDispatch();

  const newGroupDispatch = useNewGroupDispatch();
  const newGroupState = useNewGroupState();
  const chatRooms = () => {
   setMobileState(chatDispatch , "groups");
  }

  const shareGroup = () =>{
    setLeftSectionState(newGroupDispatch,"shareSection");
  }
  return (
    <>
        <Grid container item className={classes.rightHeader}>
            <Typography className={classes.headerTitle}>تفنگدار 
            </Typography>
        </Grid>
        <Grid container item className={classes.leftHeader}>
            <Typography className={classes.ButtonsHead}>
                <ButtonBase style={{marginRight:'35px'}} onClick={chatRooms}>
                    <img src={"/images/backImgBlue.png"} alt={"exit"} className={classes.backImg}/>
                </ButtonBase>
                <ButtonBase style={{marginRight:'25px'}} onClick={shareGroup}>
                    <img src={"/images/blueShare.png"} alt={"exit"}/>
                </ButtonBase>
                {
                    newGroupState.leftSection === "shareSection" &&

                     <Typography  className={classes.shareIs}> لینک با موفقیت کپی شد</Typography>
                }
            </Typography>
        </Grid>
    </>
  );
}

export default HeaderGroup;


