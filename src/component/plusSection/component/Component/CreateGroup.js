
import { Button, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../../styles";


function CreateGroup() {
    const classes = useStyle();
    return (
        <div className={classes.createdBox}>
            <Typography className={classes.createdMessage}>گروه شما با موفقیت ایجاد شد</Typography>
            <Button className={classes.shareBtn}>
                اشتراک گذاری
            </Button>
        </div>
  );
}

export default CreateGroup;


