
import React from "react";
import useStyle from "./styles";
function OthersMessage(props) {
    const classes = useStyle();
    return (
        <div className={classes.messages} style={{direction:'ltr'}}>
            <div className={classes.othersMessages}>
                {props.text}
            </div>
        </div>
  );
}

export default OthersMessage;


