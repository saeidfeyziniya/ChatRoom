import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    chatPageHeader:{
           width:'100%',
           height:'60px',
           backgroundColor:'#fff',
           padding:'15px 25px',
           marginBottom:'5px'
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
    rightHeader:{
        width:'50%',
    },
    headerTitle:{
        fontWeight:800,
        fontFamily:'iransans',
        display:'flex'
    },
    leftHeader:{
        width:'50%',
        direction:'ltr'
    },
    crlDiv:{
        width:'100%',
        flex:1,
        backgroundColor:'#fff',
        overflow:'scroll'
    },
    crlMessagesDiv:{
        width:'100%',
        height:'auto'
    },
    crlSectionsTitle:{
        fontFamily:'iransans',
        fontSize:'14px',
        color:'#5489DD',
        margin:'20px 15px 20px 0',
        fontWeight:'500',
        
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
     unSeenChat:{
        borderRight:'5px solid #F35D5B !important',
    },
    activeChat:{
        borderRight:'5px solid #5489DD !important',
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
    },
    crlChatGroupLastTime:{
        fontFamily:'iransansNumber',
        fontSize:'11px',
        color:'#939393',
        flex:1,
        fontWeight:100,
        textAlign:'left',
        paddingLeft:'7px'
    },
    crlChatDivBody:{
        display:'flex',
        direction:'row',
        justifyContent:'space-between',
        marginTop:'8px',
        paddingLeft:'8px' 
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
    crlHr:{
        width:'70%',
        margin:'20px auto'
    },chatSection:{
        flex:1,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'column',
        overflow:'hidden'
    },
    chatBox:{
        height:'85%',
        width:'100%',
        overflowY:'scroll'
    },
    chatInputBoxDiv:{
        height:'15%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    chatInputBox:{
        border:'1px solid #BFBFBF',
        padding:'10px',
        width:'85%',
        height:'28px',
        borderRadius:'4px',
        display:'flex',
    },
    inputBoxBtn:{
        width:'30px',
        height:'30px',
        marginLeft:'5px'
    },
    inputBoxTxt:{
        flex:1,
        marginLeft:'5px',
        padding:' 2px 15px',
        fontFamily:'iransansNumber',
        fontSize:'12px',
        border:'none',
        resize:'none',
        '&:focus':{
            outline:'none'
       }
    },
    empty:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    emptyMessage:{
        fontFamily:'iransans',
        color:'#9E9E9E',
        fontSize:'12px'
    },
    groupPlusSection:{
        backgroundColor:'#5489DD',
        width:'45px',
        height:'45px',
        borderRadius:'50%',
        position:'absolute',
        bottom:20,
        left:20
    },
    //create group styles
    createGroupDiv:{
        flex:1
    },
    
});

export default useStyle;