import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    
   
    messagesDiv:{
        paddingTop:'15px'
    },
    myMessages:{
        width:'100%',
        height:'max-content',
        display:'flex',
        marginBottom:'10px'

    },
    myMessagesText:{
        backgroundColor:'#5489DD',
        maxWidth:'60%',
        width:'max-content',
        height:'max-content',
        marginRight:'12px',
        padding:'5px 10px',
        borderRadius:'10px 10px 0 10px',
        fontSize:'13px',
        color:'#fff',
        fontFamily:'iransansNumber',
    }
    ,
    otherMessages:{
        width:'100%',
        height:'max-content',
        direction:'ltr',
        marginBottom:'10px'

    },
    otherMessagesText:{
        backgroundColor:'#F0F2F7',
        maxWidth:'60%',
        width:'max-content',
        height:'max-content',
        padding:'5px 10px',
        borderRadius:'10px 10px 10px 0',
        fontSize:'13px',
        color:'#000',
        fontFamily:'iransansNumber'
    }
});

export default useStyle;