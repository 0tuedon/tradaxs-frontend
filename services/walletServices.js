import { CREATE_WALLET, GET_USER_WALLETS } from "../api/urls";
import { axiosClientP, axiosClientU } from "../api/client";
import jsCookies from "js-cookies";


export const createWalletReq = async(val,token)=>{
    try{
        console.log(val,"values")
        const formdata = new FormData();
        formdata.append("userId",val.userId)
        formdata.append("coin_type",val.coin_type)
        const response =  await axiosClientP.post(CREATE_WALLET,formdata,{
            headers:{
                token:jsCookies.getItem("accessToken"),
                authorization:`Bearer ${jsCookies.getItem("accessToken")}`,
                Accept:"multipart/form"
            }
        })
        console.log(response,"response")
        return{data:response.data,err:null}
        }
        catch(err){
            console.log(err)
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}

export const  getUserWalletsReq = async(val,token)=>{
    const stringData = JSON.stringify(val)
    console.log(stringData)
    try{
        const response =  await axiosClientP.post(GET_USER_WALLETS,stringData,{
            headers:{
                token,
                authorization:`Bearer ${token}`,
            }
        })
        console.log(response)
        return{data:response.data,err:null}
        }
        catch(err){
            console.log(err)
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}