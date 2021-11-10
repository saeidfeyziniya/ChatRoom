import { ButtonBase, Typography } from "@material-ui/core";
import React from "react";
import { setNewGroupType, useNewGroupDispatch, useNewGroupState } from "../../../plusSection/context/NewGroupContext";
import useStyle from "../../styles";


function NewGroupMobile(props) {
  const classes = useStyle();

  const newGroupState = useNewGroupState()
  const newGroupDispatch = useNewGroupDispatch();
  const addNewGroup = () =>{
    if(props.type === "public"){
      setNewGroupType(newGroupDispatch , "public");
      
    }else if(props.type === "privet"){

      setNewGroupType(newGroupDispatch , "privet");
    }
  }


  const plusInButton = () =>{
      if(props.type === "public"){
        if(newGroupState.newChatType === "public"){
          return <></>
        }else{
          return <ButtonBase>
                      <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
          </ButtonBase>
        }

      }else if(props.type === "privet"){
        if(newGroupState.newChatType === "privet"){
          return <></>
        }else{
          return <ButtonBase>
                      <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
          </ButtonBase>
        }
      }
  }
  
  return (
      <ButtonBase className={classes.addGroupButton} onClick={addNewGroup}>

         <Typography  className={classes.addButtonTest} >{props.buttonText}</Typography>

         {
           //check plus image in button for create new group
          plusInButton()
         }
          

          
      </ButtonBase>
  );
}

export default NewGroupMobile;


