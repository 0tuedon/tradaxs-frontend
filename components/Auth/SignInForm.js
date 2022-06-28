import Link from "next/link";
import React, { Suspense } from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";

const SignInForm = () => {
    // Formik for signin
    // initial value
    const initialValues = {
        email:"",
        password:""
    }
    const submitHandler =   ()=>{}
    const validationSchema = Yup.object({
        email:Yup.string().email().required(),
        password:Yup.string().min(8).required()
    })
    const Formik = useFormik({
        initialValues,
        onSubmit:submitHandler,
        validationSchema
    })
  return (
    <div>
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
              className="border 
            border-borderShade 
            h-[50px]
            
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="email"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
          </div>
          {/* email */}

          <div
            className="flex 
          
          mt-[20px]
          flex-col"
          >
            <label>Enter your Password</label>
            <input
              className="border border-borderShade 
            h-[50px]
          
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
          </div>

          
                  {/* Forgot password */}

        <div className="flex justify-end mt-[5px]">
            <Link href={"/auth/signin"}>
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
          onClick={Formik.handleSubmit}
            className="
        w-[213px]
        
        h-[54px]
        rounded-[10px]
        text-white
        bg-buttonBlue"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
