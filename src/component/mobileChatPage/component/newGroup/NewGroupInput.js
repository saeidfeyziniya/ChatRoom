import { ButtonBase } from "@material-ui/core";
import React from "react";
import { setCreatedGroup, setNewGroupName, setNewGroupPassword, setShowPassword, useNewGroupDispatch, useNewGroupState } from "../../../plusSection/context/NewGroupContext";
import useStyle from "../../styles";


function NewGroupInputMobile(props) {
  const classes = useStyle();
  const newGroupDispatch = useNewGroupDispatch();
  const newGroupState = useNewGroupState();


  const createNewGroup = ()=>{

    let groupName = newGroupState.newGroupName;

    if(groupName.length < 1){
      
      alert("لطفا نام گروه را وارد کنید");

    }
    else
    {

      if(newGroupState.newChatType === "public"){

        setCreatedGroup(newGroupDispatch,"true");

      }
      else if(newGroupState.newGroupPassword === "")
      {
          
        setShowPassword(newGroupDispatch,"true");

      }   
      
    }
  }

  const createGroup = ()=>{
    let groupPassword = newGroupState.newGroupPassword;

    if(groupPassword.length !== 6){
      
      alert("رمز عبور باید 6 حرفی باشد");

    }else{
      setCreatedGroup(newGroupDispatch,"true");
    }
  }


  const plusImgInput =() =>{
    if(newGroupState.showPassword === "false"){
      return <ButtonBase onClick={createNewGroup}>
              <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
             </ButtonBase>
    }else if (props.type === "password"){
      return <ButtonBase onClick={createGroup}>
              <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
             </ButtonBase>
    }
  }


  return (
    <div className={classes.addGroupName} >
        {
          props.type ==="password" ?

            <input type={"password"} className={classes.addInputText + ' ' + classes.addInputPass} placeholder={props.placeholder} 
            onChange={e => setNewGroupPassword(newGroupDispatch,e.target.value)} />
          :
            <input type={"text"} className={classes.addInputText } placeholder={props.placeholder} 
            onChange={e => setNewGroupName(newGroupDispatch,e.target.value)} />
        }
       
        {
          plusImgInput()
        }
    </div>
  );
}

export default NewGroupInputMobile;


