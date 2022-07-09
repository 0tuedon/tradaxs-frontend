import axios from "axios";
import jsCookies from "js-cookies";

// getting the token if there a math

export const axiosClientU  = axios.create({
    timeout:20000,
    headers:{
        token:process.env.NEXT_PUBLIC_TOKEN,
        "content-type":'multipart/form',
        authorization:process.env.NEXT_PUBLIC_AUTHORIZATION,
        "Access-Control-Allow-Origin":'*'
    }},
)

export const axiosClientP  = axios.create({
    timeout:20000,
    headers:{
        "content-type":'multipart/form',
        "Access-Control-Allow-Origin":'*'
    }},
)