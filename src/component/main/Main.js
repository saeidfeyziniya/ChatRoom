import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";
import Login from "./cmpnt/loginRegister/Login";
import Register from "./cmpnt/loginRegister/Register";


function Main() {
    const classes = useStyle();

    
  return (
    <Grid container direction={"column"} className={classes.root}>
            <Grid container item className={classes.headSection}>
                <Grid className={classes.rightSection}>
                    <Grid container item style={{justifyContent:'center'}}>
                        <Typography className={classes.tittle}>یک ارتباط مطمئن و سریع را با ما تجربه کنید</Typography>
                    </Grid>
                    <Grid container item className={classes.btnDiv} direction={"column"}>
                        <Login/>
                        <Register/>
                    </Grid>
                </Grid>
                 <Grid className={classes.leftSection}>
                     <img src={"/images/phoneTouch.png"} alt={"Phone Touch"} className={classes.leftImg}/>
                 </Grid>
            </Grid>
       
        <Grid container item className={classes.askSection} >
            <Typography className={classes.topAskSection}>چرا باید این چت روم انتخاب کنی ؟</Typography>
            <Typography className={classes.bottomAskSection}> یکم بری پایین‌تر می‌فهمی که چرا ما ساده‌ترین، قدرتمندترین و امن‌ترین چت روم رو داریم</Typography>
        </Grid>
        <Grid container item className={classes.imgSection}>
            <Grid container item className={classes.imgSectionItems} direction={"column"}>
                <Grid container item className={classes.imageEndItems}>
                    <img src="/images/rightImgEndIndex.png" alt={"voice & text"} className={classes.imgEndIndex}/>
                </Grid>
                <Grid container item className={classes.textEndItems}>
                    <Typography className={classes.topTextEnd}>هر چی می خوای بگو !</Typography>
                    <Typography className={classes.bottomTextEnd}>متن ، پیام صوتی ، تصویر ، ویدئو
                     و هر چیزی دیگه ای که به ذهنت میرسه
                     رو با دوستانت به اشتراک بزار !</Typography>
                </Grid>
            </Grid>
            <Grid container item className={classes.imgSectionItems} direction={"column"}>
                <Grid container item className={classes.imageEndItems}>
                    <img src="/images/leftImgEndIndex.png" alt={"voice & text"} className={classes.imgEndIndex}/>   
                </Grid>
                <Grid container item className={classes.textEndItems}>
                <Typography className={classes.topTextEnd}>رمزگذاری کن !</Typography>
                    <Typography className={classes.bottomTextEnd}>می تونی هر اتاقی که خودت سازندش باشی رو رمزگذاری کنی، تا فقط کسایی که می خوای تو چت حضور داشته باشن !</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Main;