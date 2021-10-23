import NewGroupButton from "../../plusSection/component/Component/NewGroupInput"
import React from "react";
import useStyle from "../styles";

function EmptyGroupList(props) {
    const classes = useStyle();
    return (
        <div className={classes.emptyNewGroup}>
            <NewGroupButton buttonText={props.buttonText} />
        </div>
    );
}

export default EmptyGroupList;


