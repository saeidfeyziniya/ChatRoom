import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles({
       messages:{
           width:'100%',
           height:'max-content',
           
       },
       myMessage:{
           maxWidth:'300px',
           width:'max-content',
           height:'max-content',
           direction:'rtl',
           padding:'15px 20px',
           marginRight:'45px',
           marginBottom:'15px',
           lineHeight:1.7,
           backgroundColor:'#5489DD',
           color:'#fff',
           fontFamily:'iransansNumber',
           fontSize:'14px',
           borderRadius:'20px 20px 0 20px'
       },
       othersMessages:{
           maxWidth:'300px',
           width:'max-content',
           height:'max-content',
           padding:'15px 20px',
           marginLeft:'30px',
           marginBottom:'15px',
           lineHeight:1.7,
           backgroundColor:'#F0F2F7',
           color:'#3b3939',
           fontFamily:'iransansNumber',
           fontSize:'14px',
           borderRadius:'20px 20px 20px 0',
           direction:'rtl'
           
       }
});

export default useStyle;