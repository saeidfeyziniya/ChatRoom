import {  Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";

function MobileMyMessage(props) {

  
  const classes = useStyle();

  return (
        <>
            <div className={classes.myMessages}>
                 <Typography className={classes.myMessagesText}>
                    {props.message}
                </Typography>
            </div>
                
        </>
  );
}

export default MobileMyMessage;


