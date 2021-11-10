
import React from "react";
import OthersMessage from "./OthersMessage";
import MyMessage from "./MyMessage";



const myMessageText = 'این متن حاوی یک پیام تستی است';


function Messages() {
  return (
    <>
        <OthersMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <MyMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <OthersMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <MyMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <OthersMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <MyMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <OthersMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
        <MyMessage text={myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText + ' ' + myMessageText}/>
            
    </>
  );
}

export default Messages;


