import { Button,  Typography } from "@material-ui/core";
import React from "react";
import { useNewGroupState } from "../plusSection/context/NewGroupContext";
import NewGroupInputMobile from "./component/newGroup/NewGroupInput";
import NewGroupMobile from "./component/newGroup/NewGroupMobile";
import useStyle from "./styles";


function MobileCreateGroup() {
  const classes = useStyle();

  const addGroupState = useNewGroupState();
  
 

  //if user wanted create new public group this sec most show
  const addPublicGroup = ()=> {
    if(addGroupState.newChatType === "public"){
      
      return <div id="publicAddMobile" >
                <NewGroupInputMobile placeholder={"نام گروه"} />
              </div>
    }
  }

  const addPrivetGroup = ()=> {
    if(addGroupState.newChatType === "privet"){
      
      return <div id="privetAddMobile" >
                <NewGroupInputMobile placeholder={"نام گروه"} />
                {addPrivetGroupPassword()}
              </div>
    }
  }

  const addPrivetGroupPassword = () =>{
    if(addGroupState.newChatType === "privet" && addGroupState.showPassword === "true"){
      return <NewGroupInputMobile placeholder={"رمز 6 رقمی را وارد کنید"} type={"password"}/>
    }
  }
  return (
   <div container  className={classes.createGroupDiv}>
      <NewGroupMobile buttonText={"ایجاد گروه عمومی جدید"} type={"public"}/>

        {addPublicGroup()}
        {
          addGroupState.created === "true" &&
            addGroupState.newChatType === "public" &&
              <div className={classes.share}>
                <Typography className={classes.shareText}>گروه شما با موفقیت ایجاد شد</Typography>
                <Button className={classes.shareButton}>اشتراک گذاری</Button>
              </div>
        }

      <NewGroupMobile buttonText={"ایجاد گروه خصوصی جدید"} type={"privet"}/>

        {addPrivetGroup()}
        {
          addGroupState.created === "true" &&
            addGroupState.newChatType === "privet" &&
              <div className={classes.share}>
                <Typography className={classes.shareText}>گروه شما با موفقیت ایجاد شد</Typography>
                <Button className={classes.shareButton}>اشتراک گذاری</Button>
              </div>
        }

       
   </div>
  );
}

export default MobileCreateGroup;

