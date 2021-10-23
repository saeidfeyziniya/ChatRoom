import React from "react";
import MobileMyMessage from "./myMessages";
import MobileOtherMessage from "./otherMessages";
import useStyle from "./styles";

function MobileMessageBox() {

  
  const classes = useStyle();

  return (
        <div className={classes.messagesDiv}>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testestesttesttest testestesttesttest testestesttesttest testestesttesttest testestesttesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileMyMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
          <MobileOtherMessage message={"testtesttest testes"}/>
        </div>
  );
}

export default MobileMessageBox;


