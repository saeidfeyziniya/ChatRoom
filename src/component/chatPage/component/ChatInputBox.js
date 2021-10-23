import { ButtonBase, Grid } from "@material-ui/core";
import React from "react";
import useStyle from "../styles";

function ChatInputBox() {
    const classes = useStyle();
    return (
        <Grid container item className={classes.mcMessageInputDiv}>
            <ButtonBase className={classes.mcStickerBtn}>
            <img src={"/images/stickersBtn.png"} alt={"sticker"} className={classes.mcSticker} />
            </ButtonBase>
            <textarea type={"text"} className={classes.mcTextInput} placeholder={"پیام خود را بنویسید"}/>
            <ButtonBase className={classes.mcFileBtn}>
            <img src={"/images/fileBtn.png"} alt={"import"} className={classes.mcFile} />
            </ButtonBase>
            <ButtonBase className={classes.mcSendMessBtn}>
            <img src={"/images/send.png"} alt={"send"} className={classes.mcSendMess} />
            </ButtonBase>
        </Grid>
    );
}

export default ChatInputBox;


