
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../styles";

function EmptyMessageBox() {
    const classes = useStyle();
  return (
    <Grid container className={classes.emptyMessageBox}>
        <Typography className={classes.emptyMessage}>شما هیچ پیامی برای نمایش ندارید</Typography>
    </Grid>
  );
}

export default EmptyMessageBox;


