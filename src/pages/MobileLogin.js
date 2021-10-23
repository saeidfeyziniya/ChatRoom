
import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useStyle from "./styles";
import { Link,useHistory } from "react-router-dom";




function MobileLogin() {
  
  const classes = useStyle();
  const history = useHistory();

  const [userNameLogin,setUserNameLogin] = useState();
  const [passwordLogin,setPasswordLogin] = useState();

  //get width
  const [width,setWidth] = useState(document.body.clientWidth);
  window.addEventListener('resize',res => setWidth(document.body.clientWidth));

  const handlerLogin = () =>{
      
    const user = {
      userName: userNameLogin,
      password: passwordLogin
    }
    const error = checkData(user);

    if(error){
      return toast.error(error);
    }
    
  }

  const checkData = (user) =>{

    if(!user.userName)
      return "لطفا نام کاربری را وارد کنید";
    if(!user.password)
      return "لطفا رمز عبور را وارد کنید";
    
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
  
          <h2 id="parent-modal-title" className={classes.titleModal}>لطفا نام کاربری و رمز عبور خودتان را وارد کنید</h2>

          <input type={"text"} placeholder={'نام کاربری'} value={userNameLogin}
                onChange={e => setUserNameLogin(e.target.value)} className={classes.inputs + ' loginPlaceholder'}/>

          <input type={"password"} placeholder={'رمز عبور'} value={passwordLogin}
                onChange={e => setPasswordLogin(e.target.value)} className={classes.inputs + ' loginPlaceholder'}/>

          <Button className={classes.Btn} onClick={handlerLogin}>ورود</Button>
        </Grid>
      
      
    </Grid>
  );
}

export default MobileLogin;


