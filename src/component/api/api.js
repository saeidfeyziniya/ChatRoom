import Axios from 'axios';

export const getAxiosInstance = () =>{
    return Axios.create({
        baseURL:"http://localhost:3001/"
    })
}