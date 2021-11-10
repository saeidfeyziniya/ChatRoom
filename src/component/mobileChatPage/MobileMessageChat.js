
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React from "react";
import MobileChatGroupItem from "./component/MobileChatGroupItem";
import MobileChatInputBox from "./component/MobileChatInputBox";
import MobileEmptyMessage from "./component/MobileEmptymessage";
import MobileMessageBox from "./component/messages/MobileMessageBox";
import useStyle from "./styles";


function MobileMessagesChat() {
  const classes = useStyle();
  
  

  return (
    <div className={classes.chatSection}>
          <div className={classes.chatBox}>
              {/* <MobileEmptyMessage/> */}
              <MobileMessageBox/>
          </div>
          <div className={classes.chatInputBoxDiv}>
            <div className={classes.chatInputBox}>
              <ButtonBase className={classes.inputBoxBtn}>
                <img src={"/images/stickersBtn.png"} style={{width:'100%',height:'100%'}}  alt={"sticker"}/>  
              </ButtonBase> 
              <textarea placeholder="پیام خود را بنویسید" className={classes.inputBoxTxt}/>
              <ButtonBase className={classes.inputBoxBtn}>
                <img src={"/images/fileBtn.png"} style={{width:'100%',height:'100%'}} alt={"sticker"}/>
              </ButtonBase> 
              <ButtonBase className={classes.inputBoxBtn}>
               <img src={"/images/send.png"} style={{backgroundColor:'#317EF6', borderRadius:'50%' , width:'100%',height:'100%'}} alt={"sticker"}/>
              </ButtonBase> 
              
              
            </div>
          </div>
        </div>
  );
}

export default MobileMessagesChat;


