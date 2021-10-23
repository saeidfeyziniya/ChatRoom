import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    shareDiv:{
        backgroundColor:'#5489DD',
        width:'7%',
        height:'100%',
    },
    shareBackDiv:{
        width:'100%',
        height:'12%',
        justifyContent:'center',
        alignItems:'center'
    },
    shareMessageDiv:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'50px'
    },
    backImg:{
        width:'11px',
        height:'16px',
    },
    copyText:{
        color:'#fff',
        fontFamily:'iransans',
        fontSize:'15px',
        transform: 'rotate(270deg)',
        width:'max-content',
        margin:'0 -25px 140px 0'
    },
    shareImg:{
        margin:'0 -15px 100px 0',
        transform: 'rotate(90deg)',
    }
});

export default useStyle;