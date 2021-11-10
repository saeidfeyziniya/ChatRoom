
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../styles";
import { useChatDispatch ,setMobileState } from "../../chatPage/context/chatContext";



function MobileChatGroupItem(props) {
  const classes = useStyle();
  
  const chatDispatch = useChatDispatch();

  const unSeenChat = props.unSeen > 0 ? classes.crlChatDiv + ' '  + classes.unSeenChat : props.active === "yes" ? 
  classes.crlChatDiv + ' ' + classes.activeChat : classes.crlChatDiv;

  const showMessage = () => {
    setMobileState(chatDispatch , "messagesChat");
  }
  
  return (
    
    <Grid container item>
    <ButtonBase className={unSeenChat} onClick={showMessage}>
      <Grid container item  className={classes.crlChatDivTitle} >
        <Typography className={classes.crlChatGroupName}>{props.groupName}</Typography>
        <Typography className={classes.crlChatGroupLastTime}>{props.lastMessageTime}</Typography>
      </Grid>
      
      <Grid container item  className={classes.crlChatDivBody}>
        <Typography className={classes.crlChatGroupLastMessage}>{props.lastMessageText}</Typography>
        {props.unSeen > 0 ? <span className={classes.crlUnSeenMessageAll}>{props.unSeen}</span>:<></>  }
         
      </Grid>
    </ButtonBase>
  </Grid>
  );
}

export default MobileChatGroupItem;


