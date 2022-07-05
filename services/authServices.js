import { axiosClientU } from "../api/client";
import { BASE, FORGOT_PASSWORD, LOGIN, SIGNUP } from "../api/urls";


export const LoginReq = async (val)=>{
    try{
        const formdata = new FormData();
        formdata.append("email",val.email)
        formdata.append("password",val.password)
        formdata.append("token",process.env.NEXT_PUBLIC_TOKEN)

        const response =  await axiosClientU.post(LOGIN,formdata)
        return{data:response.data,err:null}
        }
        catch(err){
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}

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

export const ForgotPasswordReq = async (val)=>{
    try{
        const formdata = new FormData();
        formdata.append("email",val.email)
       

        const response =  await axiosClientU.post(FORGOT_PASSWORD,formdata)
        return{data:response.data,err:null}
        }
        catch(err){
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}