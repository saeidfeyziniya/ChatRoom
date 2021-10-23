import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    plusDiv:{
        backgroundColor:'#5489DD',
        width:'20%',
        height:'100%',
       
    },
    plusBackDiv:{
        width:'100%',
        height:'12%',
        direction:'ltr',
        padding:'30px  0 0 15px',
        marginBottom:'25px'
    },
    backImg:{
        width:'15px',
        height:'20px',
    },
    addDiv:{
        padding:'0 20px  '
    },
    addButton:{
        '&:hover':{
            backgroundColor:'#d2d5d9'
        },
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:'0',
        padding:'15px 20px',
        fontSize:'14px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'25px',
        boxShadow: '0px 4px 8px rgba(207, 207, 207, 0.35)',
        [theme.breakpoints.down('md')]:{
            padding:'10px 5px',
        }
        
    },
    addButtonText:{
        fontSize:'13px',
        fontFamily:'iransans'
    },
    addButtonImage:{
        width:'15px',
        height:'15px',
    },
    //input name and input password styles
    addInputText:{
        '&:focus':{
            outline:'none'
        },
        width:'100%',
        fontSize:'13px',
        fontFamily:'iransansNumber',
        border:'none',
    },
    addGroupName:{
        
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:'0',
        padding:'15px 20px',
        fontSize:'14px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'25px',
        [theme.breakpoints.down('md')]:{
            padding:'10px 5px',
        }
    },
    //created message styles
    createdBox:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    createdMessage:{
        fontSize:'15px',
        fontFamily:'iransans',
        color:'#fff',
        width:'max-content',
        marginBottom:'20px'
    },
    shareBtn:{
        '&:hover':{
            backgroundColor:'#d2d5d9'
        },
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:'0',
        padding:'15px 20px',
        fontSize:'14px',
        display:'flex',
        justifyContent:'center',
        marginBottom:'25px',
        color:'#5489DD'
    }
}));

export default useStyle;