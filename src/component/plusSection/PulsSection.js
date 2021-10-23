
import { ButtonBase, Grid } from "@material-ui/core";
import React from "react";
import AddGroup from "./component/AddGroup"
import NewGroupButton from "./component/Component/NewGroupInput";
import { resetAddGroupStates, useNewGroupDispatch, useNewGroupState } from "./context/NewGroupContext";

import useStyle from "./styles";


function PulsSection() {
  const classes = useStyle();

  const newGroupState = useNewGroupState();
  const newGroupDispatch = useNewGroupDispatch();

  const addInputBox = () => {

    if(newGroupState.newChatType !== ""){
        console.log(newGroupState.newChatType)
        return <AddGroup/>
    }
  }

  const backHandler = () =>{
        resetAddGroupStates(newGroupDispatch);
        
  }

  return (
    
      <Grid container direction={"column"} className={classes.plusDiv}>
        <Grid container item className={classes.plusBackDiv}>
            <ButtonBase style={{width:'max-content',height:'max-content'}} onClick={backHandler}>
              <img src={"/images/backImg.png"} alt={"back page"} className={classes.backImg}/>
            </ButtonBase>
        </Grid>
        <Grid container item className={classes.addDiv}>
          <NewGroupButton buttonText={"ایجاد گروه عمومی جدید"} type={"public"}/>
        </Grid>
        <Grid container item className={classes.addDiv}>
          <NewGroupButton buttonText={"ایجاد گروه خصوصی جدید"} type={"private"}/>
        </Grid>
        
         {addInputBox()} 

      
      </Grid>
    
  );
}

export default PulsSection;
