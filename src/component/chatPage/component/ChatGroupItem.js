
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import { setJoinToChat, useChatDispatch } from "../context/chatContext";
import useStyle from "../styles";



function ChatGroupItem(props) {
  const classes = useStyle();
  
  const unSeenChat = props.unSeen > 0 ? classes.crlChatDiv + ' '  + classes.unSeenChat : props.active === "yes" ? 
  classes.crlChatDiv + ' ' + classes.activeChat : classes.crlChatDiv;

  const joinToChatDispatch = useChatDispatch()

  const joinToChat = ()=> {
    setJoinToChat(joinToChatDispatch)
  }
  
  return (
    
    <Grid container item>
    <ButtonBase className={ unSeenChat} onClick={joinToChat}>
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

export default ChatGroupItem;


