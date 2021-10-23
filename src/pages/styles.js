import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
        chatPageRoot:{
           width:'100%',
           height:'100vh',
           display:'flex',
           direction:'row'
       },
       //mobile login page styles
       mobileLoginRoot:{
           width:'100%',
           height:'100vh',
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           backgroundColor:'#fff'
        },loginForm:{
           display:'flex',
           justifyContent:'center',
           alignItems:'center'
        },
        titleModal:{
            fontSize:'15px',
            fontWeight:'300',
            marginBottom:'70px',
           
        }, inputs:{
            '&:focus':{
                outline:'none'
            },
            width:'300px',
            padding:'8px 12px',
            fontFamily:'iransans',
            border:'1px solid #636363',
            borderRadius:'7px',
            boxSizing:'border-box',
            marginTop:'10px',
            marginBottom:'10px',
        },
        Btn:{
            backgroundColor:'#699DEE',
            borderRadius:'7px',
            fontFamily:'iransans',
            marginTop:'40px',
            width:'300px',
            color:'#fff',
            padding:'8px 12px',
            fontSize:12,
            '&:hover': {
                backgroundColor: '#3a73c9',
                boxShadow: 'none',
              }
        },
        backDiv:{
            position:'fixed',
            top:10,
            left:10,
            width:'100%',
            direction:'ltr'
        },
        backImg:{
            width:'13px'
        },

        //mobile size styles
        mobileChatPage:{
            width:'100%',
            height:'100vh',
            backgroundColor:'#f6f6f6',
            display:'flex',
            flexDirection:'column'
        }
        
       
});

export default useStyle;