
import {  Grid } from "@material-ui/core";
import React from "react";
import { useChatState } from "../chatPage/context/chatContext";
import HeaderDefault from "./component/HeaderDefault";
import HeaderGroup from "./component/HeaderGroup";
import useStyle from "./styles";


function MobileChatPageHeader() {
  const classes = useStyle();

  const chatState = useChatState();

  const setHeader =()=>{
    if(chatState.mobileState === "newGroup" || chatState.mobileState === "groups"){
      return <HeaderDefault/>
    }else{
      return <HeaderGroup/>
    }
  }
  return (
    <Grid container direction={"column"} className={classes.chatPageHeader}>
        {setHeader()}
    </Grid>
  );
}

export default MobileChatPageHeader;


