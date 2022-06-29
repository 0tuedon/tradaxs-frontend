import Link from "next/link";
import React, {  useEffect, useState } from "react";
import JsCookies from 'js-cookies'
import * as Yup from 'yup'
import { useFormik } from "formik";
import { paths } from "../../api/paths";
import { toast, ToastContainer } from "react-toastify";
import { LoginReq } from "../../services/authServices";
import Router from "next/router";
import Loading from "../Loading";

const SignInForm = () => {
  // state for loading
  const [isLoading,setIsLoading] = useState(false)
    // Formik for signin
    // initial value
    const initialValues = {
        email:"",
        password:""
    }
    const submitHandler =   async (val)=>{
      setIsLoading(true)
      const {data,err} = await LoginReq(val)
      if(data){
        JsCookies.setItem("accessToken", data?.accessToken)
        localStorage.setItem("login-modal",true)
        Router.push(paths.DASHBOARD)
      }
      else{
        setIsLoading(false)
        toast.error(`${err?.error||"Error"}:
         ${err?.msg||"Invalid Credentials"}`)
      }

    }
    const validationSchema = Yup.object({
        email:Yup.string().email().required(),
        password:Yup.string().min(8).required()
    })
    const Formik = useFormik({
        initialValues,
        onSubmit:submitHandler,
        validationSchema
    })

    useEffect(()=>{

      const signupmodal = localStorage.getItem("signup-modal");
      if(signupmodal){
        toast.success("Account Created Successfully")
        localStorage.removeItem("signup-modal")
      }
      else{

      }
    },[])
  return (
    <div>
      <ToastContainer
      autoClose={1000}
      />
      <form 
      onSubmit={Formik.handleSubmit}
      className="">
        {/* Two for one role on desktop */}
        <div
          className="
            flex flex-col
         md:mb-[49px]
         mb-[1px]
        justify-between "
        >
          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Enter your username or email address</label>
            <input
            name="email"
            disabled={isLoading}
              className="border 
            border-borderShade 
            h-[50px]
            disabled:bg-slate-300
        disabled:cursor-not-allowed
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="email"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.email && Formik.touched.email && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.email}
              </p>
            )}
          </div>
          {/* email */}

          <div
            className="flex 
          
          mt-[20px]
          flex-col"
          >
            <label>Enter your Password</label>
            <input
             disabled={isLoading}
            name="password"
              className="border border-borderShade 
            h-[50px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              type={"password"}
              placeholder="Password"
              onChange={Formik.handleChange} 
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.password && Formik.touched.password && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.password}
              </p>
            )}
          </div>
                  {/* Forgot password */}
        <div className="flex justify-end mt-[5px]">
            <Link href={paths.SIGNIN}>
            <a className="text-lightBlue">
                Forgot Password
            </a>

            </Link>
           
        </div>
        </div>

        <div
          className="flex mt-[60px] 
        
        md:justify-end"
        >
          <button
          type={'submit'}
          disabled={isLoading}
          onClick={Formik.handleSubmit}
            className="
        w-[213px]
        h-[54px]
        max-h-[54px]
        relative
        disabled:bg-slate-300
        disabled:cursor-not-allowed
        
        rounded-[10px]
        text-white
        bg-buttonBlue"
          >
            {isLoading?<Loading/>:'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
