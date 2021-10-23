import {Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";

function MobileOtherMessage(props) {

  
  const classes = useStyle();

  return (
        <>
                
            <div className={classes.otherMessages}>
                 <Typography className={classes.otherMessagesText}>
                     {props.message}
                 </Typography>
             </div>
                
        </>
  );
}

export default MobileOtherMessage;


