import { makeStyles } from "@material-ui/styles";


//crl... is for chatRoomsList styles
//mc... is for messagesChat styles
//st... is for settings styles


const useStyle = makeStyles((theme) =>({
       crlDiv:{
           backgroundColor:'#F9F9FB',
           width:'21%',
           height:'100%',
           overflowY:'scroll',
           [theme.breakpoints.down('md')]:{
            width:'27%',
            
            },
           [theme.breakpoints.down('sm')]:{
            width:'32.5%',
            
            }
           
       },
       crlTitleDiv:{
           marginTop:'20px' ,
           
       },
       crlTitleText:{
           fontFamily:'iransans',
           fontSize:'18px',
           fontWeight:600,
           width:'max-content',
           marginRight: '15px'

       },
       crlUnSeenMessageAll:{
           backgroundColor:'#F35D5B',
           borderRadius:'50%',
           width:'20px',
           height:'20px',
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           padding:'1px 1px 0px 1px',
           color:'#fff',
           fontFamily:'iransansNumber',
           fontSize:'10px',
           marginRight: '15px'
       },
       crlPublicSection:{
           width:'100%',

       },
       crlSectionsTitle:{
           fontFamily:'iransans',
           fontSize:'14px',
           color:'#5489DD',
           margin:'0 15px 20px 0',
           fontWeight:'500',
           marginTop:'35px'
       },
       crlChatDiv:{
           width:'100%',
           borderRight:'5px solid #E6E6E6',
           paddingRight:'18px',
           paddingLeft:'15px',
           display:'flex',
           flexDirection:'column',
           textAlign:'right',          
        },
       crlChatDivTitle:{
           display:'flex',
           justifyContent:'space-between'
           
       },
       crlChatGroupName:{
           direction:'rtl',
           fontFamily:'iransansNumber',
           fontSize:'14px',
           fontWeight:'600',
           width:'65%',
           
           [theme.breakpoints.down('sm')]:{
            width:'50%',
            
            }
           
       },
       crlChatGroupLastTime:{
           fontFamily:'iransansNumber',
           fontSize:'11px',
           color:'#939393',
           flex:1,
           fontWeight:100,
           [theme.breakpoints.down('sm')]:{
            fontSize:'5px'
            
            }
       },
       crlChatGroupLastMessage:{
           fontFamily:'iransansNumber',
           fontSize:'11px',
           color:'#939393',
           width:'71%',
           fontWeight:100,
           
           height: '30px',
           overflow: 'hidden',
       },
       crlChatDivBody:{
           display:'flex',
           direction:'row',
           justifyContent:'space-between',
           marginTop:'8px',
           paddingLeft:'8px'
       },
       activeChat:{
           borderRight:'5px solid #5489DD !important',
       },
       unSeenChat:{
           borderRight:'5px solid #F35D5B !important',
       },
       crlHr:{
           width:'70%',
           margin:'20px auto'
       }
       //setting styles
       ,
       stDiv:{
           backgroundColor:'#5489DD',
           width:'7%',
           height:'100%',
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center'
       },
       stBtn:{
        display:'flex',
        justifyContent:'center',
        margin:'30px 0',
       },
       stImages:{
           width:'20px',
           height:'20px',
       }
       //messages chat styles
       ,
       mcDiv:{
           backgroundColor:'#fff',
           flex:1,
           height:'100%',
           
       },
       mcChatBox:{
           height:'85%',
           display:'flex',
           alignContent:'flex-start',
           overflow:'scroll',  
           paddingTop: '20px'
           
       },
       mcMessageInputDiv:{
           
           display:'flex',
           flexDirection:'row',
           width:'100%',
           height:'70px',
           border:'1px solid #C8C8C8',
           padding:' 15px 20px 20px 20px',
           justifyContent:'center',
           alignItems:'center',
           margin:'10px 40px',
           borderRadius:'10px',
           [theme.breakpoints.down('sm')]:{
            margin:'10px 5px',
            
            }

       },
       mcSendMessBtn:{
           width:'40px',
           height:'40px',
           backgroundColor:'#317EF6',
           borderRadius:'50%',
           marginRight:'20px'
       },
       mcTextInput:{
           '&:focus':{
                outline:'none'
           },
           flex:1,
           marginRight:'20px',
           fontFamily:'iransansNumber',
           border:'none !important',
            resize:'none'           
       },
       mcFileBtn:{
           height:'30px',
           width:'30px',
           marginRight:'20px'
       },
       mcStickerBtn:{
           height:'30px',
           width:'30px',
       },
       mcSticker:{
           width:'35px'
       }
       ,
       mcFile:{
           width:'30px'
       }
       ,
       mcSendMess:{
           width:'40px'
       },
       //empty 
       emptyMessageBox:{
           width:'100%',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'
       },
       emptyMessage:{
           fontFamily:'iransans',
           fontSize:'16px',
           fontWeight:'500',
           color:'#9E9E9E'
       },
       emptyNewGroup:{
           margin:' 0 15px '
       }
       

}));

export default useStyle;