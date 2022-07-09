import axios from "axios";
import { CREATE_WALLET, GET_ALL_ASSETS, GET_USER_WALLETS } from "../api/urls";
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
    const stringData = val
    console.log(stringData)
    try{
        const response =  await axios.post(GET_USER_WALLETS,stringData,{
            headers:{
                Authorization:process.env.NEXT_PUBLIC_AUTHORIZATION,
                "Content-Type": 'application/json'
            }
        })
        return{data:response.data,err:null}
        }
        catch(err){
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}

export const  getAllAssets = async(token)=>{
 
    try{
        const response =  await axios.get(GET_ALL_ASSETS,{
            headers:{
                Authorization:process.env.NEXT_PUBLIC_AUTHORIZATION,
                "Content-Type": 'application/json'
            }
        })
        return{data:response.data,err:null}
        }
        catch(err){
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}
// get all assets that tradaxs supports
