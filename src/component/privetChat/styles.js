import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontFamily:'iransans',
        color:'#2D2D2D',
        width:'max-content',
        fontSize:'13px',
        fontWeight:'600'
    },
    passwordDiv:{
        
        width:'100%',
        height:'max-content',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50px',
        direction:'ltr',

        
    },
    passwordChar:{
        width:'30px',
        height:'30px',
        border:'2px solid #5489DD',
        borderRadius:'50px',
        padding:'5px 5px 3px 5px',
        marginRight:'20px',
        textAlign:'center',
        fontSize:'20px',
        fontFamily:'iransansNumber',
        '&:focus':{
            outline:'none'
        }
    },
    loginBtn:{
        marginTop:'50px',
        width:'200px',
        backgroundColor:'#699DEE',
        color:'#fff',
        padding:'10px',
        '&:hover':{
            backgroundColor:'#548ce3'
        }
    }
    
});

export default useStyle;