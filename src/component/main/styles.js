import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme)=>({
       root:{
           backgroundColor:'#EBF3FA',
           paddingTop: '80px',
           justifyContent:'center',
           alignItems:'center',
           
       },
       headSection:{
           
           backgroundColor:'#EBF3FA',
           width:'100%',
           height:'680px',
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           [theme.breakpoints.down('xs')]:{
            alignItems:'flex-start',   
            height:'auto',

            },
           [theme.breakpoints.down('sm')]:{
             
            height:'auto',
            marginTop:'50px'
            }

       },
       leftSection:{
        width:'50%',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        }
       },
      
       leftImg:{
           width:'85%',
           height:'90%',
           [theme.breakpoints.down('md')]:{
            width:'100%',
            
            },
           [theme.breakpoints.down('xs')]:{
            width:'100%',
            }
       },
       rightSection:{
        width:'40%',
        direction:'ltr',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            width:'50%',
            
        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        }
       },
       tittle:{
           fontSize:'25px',
           zIndex:1,
           fontFamily:'iransans',
           color:'#296ED8',
           fontWeight:'800',
           justifyContent:'center',
           [theme.breakpoints.down('md')]:{
            fontSize:'20px',
            
            }
           ,
           [theme.breakpoints.down('sm')]:{
            fontSize:'16px',
            
            }
           ,
           [theme.breakpoints.down('xs')]:{
            fontSize:'19px',
            fontWeight:'600',
            marginTop:'50px'
           }
       },
       btnDiv:{
           width:'100%',
           justifyContent:'center',
           alignItems:'center'
       },
       
       
       askSection:{
           backgroundColor:'#EBF3FA',

       },
       topAskSection:{
           width:'100%',
           textAlign:'center',
           fontSize:'22px',
           fontFamily:'iransans',
           color:'#2B478B',
           marginTop:'30px'
       },
       bottomAskSection:{
           width:'100%',
           textAlign:'center',
           fontSize:'15px',
           fontFamily:'iransans',
           color:'#2B478B',
           padding:'10px'
       },
       imgSection:{
           backgroundColor:'#EBF3FA',
           width:'100%',
           justifyContent:'center'
       },
       imgSectionItems:{
           width: '420px',
           height: '550px',
           backgroundColor:'#fff',
           margin:'40px 50px',
           borderRadius:'20px',
           display:'flex',
           alignItems:'center'
       },
       imageEndItems:{
           width:'90%',
           height:'400px',
           marginTop:'30px',
           backgroundColor:'#fff'
       },
       imgEndIndex:{
           width:"100%",
           height:'100%',
       },
       textEndItems:{
           width:'80%',
           textAlign:'center',
       },
       topTextEnd:{
           width:'100%',
           fontSize:'20px',
           fontFamily:'iransans',
           textAlign:'center',
           fontWeight: '800',
           marginTop:'10px'
       },
       bottomTextEnd:{
           width:'100%',
           fontSize:'12px',
           fontFamily:'iransans',
           textAlign:'center',
           marginTop:'10px'
       }


       
}));

export default useStyle;