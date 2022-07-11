import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import JsCookies from "js-cookies";
import LogoAccent from "../assets/icons/LogoAccent";
import Link from "next/link";
import Input from "../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ForgotPasswordReq, LoginReq } from "../services/authServices";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { paths } from "../api/paths";
import Loading from "../components/Loading";

const Login = () => {
  const [isLoading,setIsLoading] = useState(false)
  const Router = useRouter()
  //validation schema
  const submitHandler = async (val)=>{
    setIsLoading(true)
    const {data,err} = await ForgotPasswordReq(val)
    if(data){
      localStorage.setItem("reset-modal",true)
    
    //   Router.push(paths.FORGOT_PASSWORD)
    }
    else{
      setIsLoading(false)
      toast.error(`${err?.error||"Error"}:
       ${err?.msg||"Invalid Credentials"}`)
    }

  }



  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Field is required"),
  });

  return (
    <section className="grid max-w-full min-h-screen p-5 md:px-10 bg-bgray place-items-center">
      <ToastContainer
      autoClose={500}
      />
      <div className="w-full h-auto max-w-md p-5 pb-10 bg-white rounded-md">
        <span className="grid mx-auto mb-5 w-fit place-items-center">
          <Link href="/" passHref>
            <a>
              <LogoAccent className="w-10 h-10" />
            </a>
          </Link>
          <h3 className="my-0 text-sm font-medium md:text-base">Tradaxs</h3>
        </span>
        <h1 className="text-base font-medium text-center md:text-lg">
          Reset Password
        </h1>
        <p className="text-xs text-center md:text-sm opacity-70">
          Enter email to reset password
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            submitHandler(values)
          }}
        >
          {() => (
            <Form className="relative w-full mt-5">
              {/* email field */}
              <Input
                as="label"
                label="Email"
                name="email"
                type="email"
                placeholder="Email address"
              />
              {/* password field */}
              {/* needed more customization*/}
              <button
                type="submit"
                className=" w-full 
                px-5 py-3 mt-8 text-sm font-medium text-center
                 text-white 
                 max-h-[48px]
                 flex justify-center items-center
                 rounded-md bg-accent"
              >
                {isLoading?<Loading/>:'Reset Password'}
              </button>
              <p className="mt-4 text-xs text-center md:text-sm">
                Remembered Password{" "}
                <Link href={paths.SIGNIN} passHref>
                  <a className="text-accent">Sign in</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
