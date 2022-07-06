import { axiosClientU } from "../api/client";
import { USER_DETAILS } from "../api/urls";
export const getProfileDetailsReq = async ()=>{
    try{
        const response =  await axiosClientU.get(USER_DETAILS)
        return{data:response.data,err:null}
        }
        catch(err){
            return{
                data:null,
                err: err?.response?.data || { msg: "No Network Connection" },
            }
        }    
}