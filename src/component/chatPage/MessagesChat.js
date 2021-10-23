
import { Grid } from "@material-ui/core";
import React from "react";
import ChatInputBox from "./component/ChatInputBox";
import MessageBox from "./component/MessageBox";
import useStyle from "./styles";


function MessagesChat() {
  const classes = useStyle();
  

  return (
    <Grid container className={classes.mcDiv}>
        <MessageBox/>
        <ChatInputBox/>
      
      
    </Grid>
  );
}

export default MessagesChat;


