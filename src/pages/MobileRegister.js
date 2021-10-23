
import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useStyle from "./styles";
import { Link , useHistory } from "react-router-dom";




function MobileRegister() {
  
  const classes = useStyle();
  const history = useHistory();
  const [userNameRegister,setUserNameRegister] = useState();
  const [nameRegister,setNameRegister] = useState();
  const [phoneNumberRegister,setPhoneNumberRegister] = useState();
  const [passwordRegister,setPasswordRegister] = useState();

  //get width
  const [width,setWidth] = useState(document.body.clientWidth);
  window.addEventListener('resize',res => setWidth(document.body.clientWidth));
   //register handler
 
   const handlerRegister = () =>{
       
    const user = {
      userName : userNameRegister,
      password : passwordRegister,
      userFullName :nameRegister,
      phone :phoneNumberRegister
    }
    const error = checkData(user);

    if(error){
      return toast.error(error);
    }
    
  }

  const checkData = (user) =>{
    if(!user.userFullName)
     return "لطفا نام خود را وارد کنید";
    if(!user.userName)
      return "لطفا نام کاربری را وارد کنید";
    if(!user.phone)
      return "لطفا شماره تماس خود را وارد کنید";
    if(!user.password)
      return "لطفا رمز عبور را وارد کنید";
    if(user.password.length < 6 || user.password.length > 12)
      return "حداقل کاراکتر برای رمز 6 و حداکثر 12 رقم می باشد"
  }

  



  return (
    <Grid container direction={"column"} className={classes.mobileLoginRoot}>
        {width > 599 && history.push("/")}
        <Grid  container item className={classes.backDiv}>
          <Link to={"/"}>
            <img src={"/images/backImgBlue.png"} alt={"backImg"} className={classes.backImg}/>
          </Link>
        </Grid>
        <Grid  container item direction={"column"} className={classes.loginForm}>
  
            <h2 id="parent-modal-title" className={classes.titleModal}>لطفا نام کاربری و شماره تماس خودتان را وارد کنید</h2>

            <input type={"text"} value={nameRegister} onChange={e => setNameRegister(e.target.value)}
            placeholder={'نام و نام خانوادگی'} className={classes.inputs + ' loginPlaceholder'}/>

            <input type={"password"} value={userNameRegister}  onChange={e => setUserNameRegister(e.target.value)}
            placeholder={'نام کاربری'} className={classes.inputs + ' loginPlaceholder'}/>

            <input type={"password"} value={phoneNumberRegister} onChange={e => setPhoneNumberRegister(e.target.value)}
            placeholder={'شماره تماس'} className={classes.inputs + ' loginPlaceholder'}/>

            <input type={"password"} value={passwordRegister}  onChange={e => setPasswordRegister(e.target.value)}
            placeholder={'رمز ورود'} className={classes.inputs + ' loginPlaceholder'}/>


            <Button className={classes.Btn} onClick={handlerRegister}>ثبت نام</Button>
        </Grid>
      
      
    </Grid>
  );
}

export default MobileRegister;


