import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import CheckPassword from "../../privetChat/CheckPassword";
import { useChatState } from "../context/chatContext";
import EmptyMessageBox from "../empty/EmptyMessageBox";
import Messages from "../messages/Messages";
import useStyle from "../styles";

function MessageBox() {

  const {chatBoxState} = useChatState()
    
 
  const renderChatBox = () =>{
    if(chatBoxState === "empty"){
      return <EmptyMessageBox/>
    }else if(chatBoxState === "passwordChat"){
      return <CheckPassword/>
    }else if(chatBoxState === "messages"){
      return <Messages/>
    }
  }
  const classes = useStyle();

  return (
        <Grid container item className={classes.mcChatBox}>
            {/* {
              renderChatBox()
            } */}
            
            <Messages />

        </Grid>
  );
}

export default MessageBox;


