import {  ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import { setMobileState, useChatDispatch } from "../chatPage/context/chatContext";
import MobileChatGroupItem from "./component/MobileChatGroupItem";
import useStyle from "./styles";


function MobileChatRoomsList() {
  const classes = useStyle();

  const chatDispatch = useChatDispatch();
  const addGroup = () => {
   setMobileState(chatDispatch , "newGroup");
  }

  return (
   <Grid container direction={"row"} className={classes.crlDiv}>
     <Grid container item className={classes.crlMessagesDiv}>
        <Typography variant="h5" className={classes.crlSectionsTitle}>عمومی</Typography>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"yes"}/>
     </Grid>
     <Grid container item className={classes.crlMessagesDiv}>
        <Typography variant="h5" className={classes.crlSectionsTitle}>خصوصی</Typography>
        
        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={3} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <MobileChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"no"}/>
        
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

     </Grid>
     <ButtonBase className={classes.groupPlusSection} onClick={addGroup}>
        <img src={"/images/plus.png"} alt={"plusImage"} style={{width:'20px',height:'20px'}}/>
     </ButtonBase>
    
   </Grid>
  );
}

export default MobileChatRoomsList;


