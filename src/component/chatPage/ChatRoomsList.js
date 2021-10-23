import {  Grid, Typography } from "@material-ui/core";
import React from "react";
import ChatGroupItem from "./component/ChatGroupItem";
import useStyle from "./styles";
import EmptyGroupList from './empty/EmptyGroupList';


function ChatRoomsList() {
  const classes = useStyle();

  return (
    <Grid container direction={"row"} className={classes.crlDiv}>
      <Grid container item className={classes.crlTitleDiv}>
        <Typography className={classes.crlTitleText}>پیام ها</Typography>
        <span className={classes.crlUnSeenMessageAll}>3</span>    
      </Grid>

      {/* public group */}

      <Grid container item direction={"column"} className={classes.crlPublicSection}>
        <Typography className={classes.crlSectionsTitle}>عمومی</Typography>
        <ChatGroupItem groupName={"3 تفنگ دار"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0} active={"yes"}/>
      </Grid>

      <Grid container item direction={"column"} className={classes.crlPublicSection}>
        <Typography className={classes.crlSectionsTitle}>خصوصی</Typography>
        <Grid container item>

          <ChatGroupItem groupName={"پنج شیر"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 30 دقیقه پیش"} unSeen={3}/>

        </Grid>
        <hr className={classes.crlHr} color={'#EEF0F2'}/>
        <Grid container item>

          <ChatGroupItem groupName={"پیچاز"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 4 ساعت پیش"} unSeen={0}/>
          
        </Grid>
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <Grid container item>

          <ChatGroupItem groupName={"گرافیک"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 2 روز پیش"} unSeen={0}/>
            
        </Grid>
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <Grid container item>

          <ChatGroupItem groupName={"توسعه دهنده"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 1 هفته پیش"} unSeen={0}/>
         
          
        </Grid>
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <Grid container item>

          <ChatGroupItem groupName={"توسعه دهنده"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 1 هفته پیش"} unSeen={0}/>
         
          
        </Grid>
        <hr className={classes.crlHr} color={'#EEF0F2'}/>

        <Grid container item>

          <ChatGroupItem groupName={"توسعه دهنده"} lastMessageText={"این متن صرفا یک متن تستی برا ی این قسمت می باشد"}
                       lastMessageTime={" 1 هفته پیش"} unSeen={0}/>
         
          
        </Grid>
      </Grid>
      
    </Grid>
  );
}

export default ChatRoomsList;


