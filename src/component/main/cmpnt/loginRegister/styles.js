import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) =>({
        loginModal:{
           position:'absolute',
           top:'320px',
           left:'50%',
           transform: 'translate(-50%, -50%)',
           width: 600,
           height:250,
           backgroundColor: '#fff',
           padding:'60px  4px 3px',
           borderRadius:'10px',
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
        },
        registerModal:{
            
           position:'absolute',
           top:'320px',
           left:'50%',
           transform: 'translate(-50%, -50%)',
           width: 600,
           height:350,
           backgroundColor: '#fff',
           padding:'60px  4px 3px',
           borderRadius:'10px',
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
          
        },
        titleModal:{
            fontSize:'12px',
            fontWeight:'300',
            marginBottom:'20px',
            [theme.breakpoints.down('xs')]:{
              fontSize:'15px',
              color:'#2D2D2D',
              marginBottom:'65px'
            }
        },
        loginBtn:{
            '&:hover': {
                backgroundColor: '#3a73c9',
                boxShadow: 'none',
              },
               width:'380px',
               height:'50px',
               margin:'110px 0 15px',
               backgroundColor:'#699DEE',
               color:'#fff',
               [theme.breakpoints.down('md')]:{
                width:'320px',
                
                }
                ,
                [theme.breakpoints.down('sm')]:{
                    width:'280px',
                    margin:'80px 0 15px'
                }
                ,
                [theme.breakpoints.down('xs')]:{
                    margin:'40px 0 20px',
                    width:'280px',
                }
        },
        registerBtn:{
            '&:hover': {
                backgroundColor: '#6456C0',
                color:'#fff',
                boxShadow: 'none',
              },
               width:'380px',
               height:'50px',
               color:'#6456C0',
               borderColor:'#6456C0',
               [theme.breakpoints.down('md')]:{
                width:'320px',
                
                },
                [theme.breakpoints.down('sm')]:{
                    width:'280px',
                    
                }
                ,
                [theme.breakpoints.down('xs')]:{
                    width:'280px',
                    marginBottom:'50px'
                }
        },
        inputs:{
            '&:focus':{
                outline:'none'
            },
            width:280,
            padding:'8px 12px',
            fontFamily:'iransans',
            border:'1px solid #636363',
            borderRadius:'7px',
            boxSizing:'border-box',
            marginTop:'10px',
            [theme.breakpoints.down('xs')]:{
                width:'280px',
                marginBottom:'10px',
            }
        },
        Btn:{
            backgroundColor:'#699DEE',
            borderRadius:'7px',
            fontFamily:'iransans',
            marginTop:'40px',
            width:280,
            color:'#fff',
            padding:'8px 12px',
            fontSize:12,
            '&:hover': {
                backgroundColor: '#3a73c9',
                boxShadow: 'none',
              }
        }
            
      

            
}));

export default useStyle;