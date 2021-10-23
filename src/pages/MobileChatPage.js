
import { ButtonBase } from "@material-ui/core";
import React from "react";
import MobileChatPageHeader from "../component/mobileChatPage/MobileChatPageHeader";
import MobileChatRoomsList from "../component/mobileChatPage/MobileChatRoomsList";
import MobileCreateGroup from "../component/mobileChatPage/MobileCreateGroup";
import MobileMessagesChat from "../component/mobileChatPage/MobileMessageChat";
import useStyle from "./styles";


function MobileChatPage() {
  const classes = useStyle();
  return (
    <div  className={classes.mobileChatPage}>
        <MobileChatPageHeader/>
        {/* <MobileChatRoomsList/> */}
        {/* <MobileMessagesChat/> */}
        <MobileCreateGroup/>
        
    </div>
  );
}

export default MobileChatPage;


