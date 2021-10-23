import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
       root:{
           backgroundColor:'white',
           width:'100%',
           height:'70px',
           display:'flex',
           justifyContent:'center',
           alignItems: 'center',
           position:'fixed',
           top:-2,
           zIndex:2
       },
       headNav:{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            width:'967px',
            height:'36px',
            
       },
       navBtn:{
           fontSize:'16px',
           fontFamily:'iransans',
           padding:'8px',
           [theme.breakpoints.down('xs')]:{
            fontSize:'12px',
           }
       },
       headNavItems:{
           display:'inline',
           marginLeft:'120px',
           padding:'2px',
           color:'#5E5E5E',
           
           [theme.breakpoints.down('sm')]:{
            marginLeft:'50px',
        }
       },
       headNavItemEnd:{
        display:'inline',
        padding:'2px',
        color:'#5E5E5E',
        fontSize:'20px'
       }
}));

export default useStyle;