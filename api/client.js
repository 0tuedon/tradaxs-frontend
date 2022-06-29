import axios from "axios";

// getting the token if there a math

export const axiosClientU  = axios.create({
   
    headers:{
        token:process.env.NEXT_PUBLIC_TOKEN,
        web_key:process.env.NEXT_PUBLIC_WEB_KEY,
        "content-type":'multipart/form',
        authorization:process.env.NEXT_PUBLIC_AUTHORIZATION
    }}
)