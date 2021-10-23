
import { Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../styles";


function MobileEmptyMessage() {
  const classes = useStyle();
  

  return (
              <div className={classes.empty}>
                <Typography className={classes.emptyMessage}>شما هیچ پیامی برای نمایش ندارید</Typography>
              </div>
  );
}

export default MobileEmptyMessage;


