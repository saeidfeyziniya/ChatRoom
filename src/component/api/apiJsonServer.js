import {getAxiosInstance} from './api';


export const LoginApi = (user) =>{
    getAxiosInstance().post("Login",user)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}