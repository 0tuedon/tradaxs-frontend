import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import JsCookies from "js-cookies";
import LogoAccent from "../assets/icons/LogoAccent";
import Link from "next/link";
import Input from "../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginReq } from "../services/authServices";
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

  useEffect(()=>{
    const resetmodal = localStorage.getItem("reset-modal");
    if(resetmodal){
      toast.success("A Mail has been sent ")
      localStorage.removeItem("reset-modal")
    }
    else{

    }
  },[])

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Field is required")
      .min(8, "Field must be at least 8 characters long"),
      password_confirmation:Yup.string().oneOf(
        [Yup.ref("password"), null],
        "password must match"
      ).required("field is required"),
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
          Enter your new Password
        </p>
        <Formik
          initialValues={{
            password_confirmation:"",
            password: "",
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
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
              {/* password field */}
              {/* needed more customization*/}
              <Input
                as="label"
                label="Confirm Password"
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className=" w-full 
                px-5 py-3 mt-8 text-sm font-medium text-center
                 text-white 
                 max-h-[48px]
                 flex justify-center items-center
                 rounded-md bg-accent"
              >
                {isLoading?<Loading/>:'Update Password'}
              </button>
              {/* <p className="mt-4 text-xs text-center md:text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" passHref>
                  <a className="text-accent">Sign up</a>
                </Link>
              </p> */}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;