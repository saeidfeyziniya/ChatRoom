import React from "react";
import ChatRoomsList from "../component/chatPage/ChatRoomsList";
import MessagesChat from "../component/chatPage/MessagesChat";
import Settings from "../component/chatPage/Settings";
import PulsSection from "../component/plusSection/PulsSection";
import ShareSection from "../component/shareSection/ShareSection";

import useStyle from "./styles";
import {  useNewGroupState } from "../component/plusSection/context/NewGroupContext";
import { ChatProvider } from "../component/chatPage/context/chatContext";

function ChatPage() {
  const classes = useStyle();
  
  const groupState = useNewGroupState();
  const leftSection = () => {
    if(groupState.leftSection === "settings"){
      console.log("setting");
      return <Settings/>
    }else if(groupState.leftSection === "plusSection"){
      console.log("plus");
      return <PulsSection/>
    }
    else if(groupState.leftSection === "shareSection"){
      console.log("share");
      return <ShareSection/>
    }
  }

  return (
          
        <div className={classes.chatPageRoot}>
         <ChatProvider>
          <ChatRoomsList/>
          <MessagesChat/>
         </ChatProvider> 
          {leftSection()}
          
        </div>
          
  );
}

export default ChatPage;


