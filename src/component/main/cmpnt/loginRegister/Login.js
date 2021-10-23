import { Box, Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useStyle from "./styles";

export default function Login() {

    
    const classes = useStyle();

    //login states
    const [userNameLogin,setUserNameLogin] = useState();
    const [passwordLogin,setPasswordLogin] = useState();
    //get width
    const [width,setWidth] = useState(document.body.clientWidth);
    window.addEventListener('resize',res => setWidth(document.body.clientWidth));
    //login handler

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


    //this is for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        {width > 600 ?
        <Button onClick= {handleOpen} variant="contained" className={classes.loginBtn}>ورود</Button>
        :
        <Link to={"/mLogin"} style={{textDecoration:'none'}}><Button variant="contained" className={classes.loginBtn}>ورود</Button></Link>
        
        }
        
        
        {width > 600 &&
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description">
          <Box className={classes.loginModal}>
            
            <h2 id="parent-modal-title" className={classes.titleModal}>لطفا نام کاربری و رمز عبور خودتان را وارد کنید</h2>

            <input type={"text"} placeholder={'نام کاربری'} value={userNameLogin}
                  onChange={e => setUserNameLogin(e.target.value)} className={classes.inputs + ' loginPlaceholder'}/>

            <input type={"password"} placeholder={'رمز عبور'} value={passwordLogin}
                  onChange={e => setPasswordLogin(e.target.value)} className={classes.inputs + ' loginPlaceholder'}/>
            
            <Button className={classes.Btn} onClick={handlerLogin}>ورود</Button>
          </Box>
        </Modal>
        }
        
      </div>
    );
  }