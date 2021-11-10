
import { ButtonBase } from "@material-ui/core";
import React from "react";
import { useChatState } from "../component/chatPage/context/chatContext";
import MobileChatPageHeader from "../component/mobileChatPage/MobileChatPageHeader";
import MobileChatRoomsList from "../component/mobileChatPage/MobileChatRoomsList";
import MobileCreateGroup from "../component/mobileChatPage/MobileCreateGroup";
import MobileMessagesChat from "../component/mobileChatPage/MobileMessageChat";
import useStyle from "./styles";


function MobileChatPage() {
  const classes = useStyle();

  const chatState = useChatState();


  const setPage = () =>{
    if(chatState.mobileState === "groups"){
      return <MobileChatRoomsList/>;
    }else if(chatState.mobileState === "messagesChat"){
      
      return <MobileMessagesChat/>;
    }else if(chatState.mobileState === "newGroup"){

      return <MobileCreateGroup/>;
    }
  }
  return (
    <div  className={classes.mobileChatPage}>
      
        <MobileChatPageHeader/>
        {setPage()}
        
        
    </div>
  );
}

export default MobileChatPage;


