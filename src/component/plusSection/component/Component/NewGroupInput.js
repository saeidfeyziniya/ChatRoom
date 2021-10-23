
import { Button, ButtonBase,  Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../../styles";
import { setCreatedGroup, setNewGroupName, setNewGroupPassword, setNewGroupType, setShowPassword, useNewGroupDispatch} from "../../context/NewGroupContext"
import { useNewGroupState } from "../../context/NewGroupContext";
import { toast } from "react-toastify";


export default function NewGroupButton(props) {
    const classes = useStyle();
    
    const newGroupDispatch = useNewGroupDispatch();
    const newGroupState = useNewGroupState();

   const plusImg = () => {
    if(props.type===""){
        return <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage}/>
    }
    if(props.type !== newGroupState.newChatType){
        return <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage}/>
    }
    

   }
   const setChatType = () =>{
       if(props.type==="public")
            setNewGroupType(newGroupDispatch , "public")
        else
            setNewGroupType(newGroupDispatch , "private")  
   }
    return (
        <Button className={classes.addButton} onClick={setChatType}>
            <Typography className={classes.addButtonText}>{props.buttonText}</Typography>
            {plusImg()}
        </Button>
  );
}


export  function NewGroupInput(props) {
    const classes = useStyle();

    const newGroupDispatch = useNewGroupDispatch();
    const newGroupState = useNewGroupState();
    
    const btnPlus = () =>{
        if(newGroupState.showPassword !== "true"){
            return <ButtonBase onClick={props.inputName === "GroupName"? showPassword : setCreatedGroupState}>
                    <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
                   </ButtonBase>
        }else if(newGroupState.showPassword === "true" && props.inputName !== "GroupName" && newGroupState.created !== "true")
        {   
            

            return <ButtonBase onClick={props.inputName === "GroupName"? showPassword : setCreatedGroupState}>
                    <img src={"/images/bluePlus.png"} alt={"plus gap"} className={classes.addButtonImage }/>
                   </ButtonBase>
        }

        
    }
       

    const etNewGroupItem = (e) =>{
        if(newGroupState.showPassword === "true" && props.inputName === "GroupName" ){
            e.target.value = newGroupState.newGroupName
            return toast.error("برای تغییر نام گروه باید مجدد وارد این بخش شوید")
        }
        if(newGroupState.created === "true" && props.inputName === "Password" ){
            e.target.value = newGroupState.newGroupPassword
            return toast.error("گروه ایجاد شده و شما نمیتوانید رمز را عوض کنید")

        }
        if(props.inputName === "Password"){

            setNewGroupPassword(newGroupDispatch , e.target.value );
        }
        else{
            setNewGroupName(newGroupDispatch , e.target.value );

        }
    }
   
   
    const setCreatedGroupState = () =>{
        if(newGroupState.newGroupPassword.length !== 6){
            return toast.error("رمز عبور باید 6 رقم باشد")
        }
        if(newGroupState.newGroupPassword !== ""){
            setCreatedGroup(newGroupDispatch,"true");
        }
    }
    const showPassword = () =>{
        if(newGroupState.newGroupName !== ""){

            setShowPassword(newGroupDispatch , "true")
        }
    }
    
    return (
        <div className={classes.addGroupName}>

            <input type={"text"} className={classes.addInputText} placeholder={props.inputText} 
            onChange={etNewGroupItem} value={newGroupState.newGroupName}/>

            {btnPlus()}
            
        </div>
  );
}

