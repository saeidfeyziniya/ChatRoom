
import React from "react";
import useStyle from "./styles";

function MyMessage(props) {
    const classes = useStyle();
    return (
        <div className={classes.messages}>
            <div className={classes.myMessage}>
                {props.text}
            </div>
        </div>
  );
}

export default MyMessage;


