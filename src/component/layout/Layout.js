import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "./styles";
import {BrowserRouter , Route ,Switch  } from 'react-router-dom'
import Home from "../../pages/Home";
import ChatPage from "../../pages/ChatPage";
import { NewGroupProvider } from "../plusSection/context/NewGroupContext";
import MobileLogin from "../../pages/MobileLogin";
import MobileRegister from "../../pages/MobileRegister";
import MobileChatPage from "../../pages/MobileChatPage";
import { ChatProvider } from "../chatPage/context/chatContext";



function Layout() {
  const classes = useStyle();

  const [width,setWidth] = useState(document.body.clientWidth);
  window.addEventListener('resize',res => setWidth(document.body.clientWidth));

  return (
    <Grid container className={classes.root}>
      <BrowserRouter>
      <NewGroupProvider>
        <ChatProvider>

          <Switch>
          <Route exact path={"/mLogin"} component={MobileLogin}/>
          <Route exact path={"/mRegister"} component={MobileRegister}/>
            <Route exact path={"/ChatPage"} component={ width < 600 ? MobileChatPage : ChatPage}/>
          <Route component={Home} />
          </Switch>
        </ChatProvider>

      </NewGroupProvider>
      </BrowserRouter>
    </Grid>
  );
}

export default Layout;