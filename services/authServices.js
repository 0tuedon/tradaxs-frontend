import { axiosClientU } from "../api/client";
import { BASE, LOGIN, SIGNUP } from "../api/urls";


export const login = ()=>{}

export const SignupReq = async (val)=>{
    try{
    const formdata = new FormData();
    formdata.append("username",val.username)
    formdata.append("bvn",val.bvn)
    formdata.append("name",val.name)
    formdata.append("phone",`+234${val.username}`)
    formdata.append("password",val.password)
    formdata.append("email",val.email);
    const response =  await axiosClientU.post(SIGNUP,formdata)
    return{data:response.data,err:null}
    }
    catch(err){
        return{
            data:null,
            err: err?.response?.data || { msg: "No Network Connection" },
        }
    }
    

}