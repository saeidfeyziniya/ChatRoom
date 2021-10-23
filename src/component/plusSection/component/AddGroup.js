
import { Grid } from "@material-ui/core";
import React from "react";
import CreateGroup from "./Component/CreateGroup";
import { NewGroupInput } from "./Component/NewGroupInput";
import useStyle from "../styles";
import { useNewGroupState } from "../context/NewGroupContext";


function AddGroup() {
  const classes = useStyle();
  
  const newGroupState = useNewGroupState();
  const showPasswordInput =() =>{
    if(newGroupState.showPassword === "true"){
      return <Grid container item className={classes.addDiv }>
              <NewGroupInput inputText={"رمز عبور"} inputName={"Password"}/>
              </Grid>
              
            
    }
  }
  
  const showCreatedPart = () =>{
    if(newGroupState.created === "true"){
      return  <Grid container item className={classes.addDiv}>
              <CreateGroup/>
              </Grid>
    }
  }
    
  return (
    <>
      <Grid container item className={classes.addDiv}>
        <NewGroupInput inputText={"نام گروه"} inputName={"GroupName"}/>
      </Grid>
      {showPasswordInput()}
      {showCreatedPart()}
  </>
  );
}

export default AddGroup;


