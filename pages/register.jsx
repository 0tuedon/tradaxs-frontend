import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoAccent from "../assets/icons/LogoAccent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Input from "../components/Input";
import { registerStructure } from "../data/Register";
import { paths } from "../api/paths";
import { SignupReq } from "../services/authServices";
import Loading from "../components/Loading";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  //validation schema
  const submitHandler = async (val) => {
    setIsLoading(true);
    const { data, err } = await SignupReq(val);
    if (data) {
      localStorage.setItem("signup-modal", true);
      Router.push(paths.SIGNIN);
    } else {
      setIsLoading(false);
      const [email] = err?.errors?.email || [undefined];
      toast.error(`${err?.msg || "Error:"}
      ${email || err?.errors?.username[0] || " "}`);
    }
  };
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Field is required"),
    username: Yup.string().required("Field is required"),
    email: Yup.string().email("Invalid email").required("Field is required"),
    phone: Yup.string().required("Field is required"),
    password: Yup.string()
      .required("password is required")
      .min(8, "password must be a minimum of eight characters"),
    cPassword: Yup.string()
      .required("field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <section className="grid max-w-full min-h-screen p-5 md:px-10 bg-bgray place-items-center">
      <ToastContainer autoClose={100} />
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
          Create Account
        </h1>
        <p className="text-xs text-center md:text-sm opacity-70">
          Enter your details to create a new account
        </p>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            cPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            // same shape as initial values
            submitHandler(values);
          }}
        >
          {() => (
            <Form className="relative w-full mt-5">
              {registerStructure.map((field, index) => {
                return (
                  <Input
                    key={index}
                    as={field.as}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                );
              })}
              <button
                type="submit"
                className="
                 w-full px-5 py-3 mt-8 text-sm font-medium 
                text-center text-white rounded-md bg-accent
                flex justify-center items-center
                max-h-[48px]
                "
              >
                {isLoading ? <Loading /> : "Sign up"}
              </button>
              <p className="mt-4 text-xs text-center md:text-sm">
                Already have an account?{" "}
                <Link href="/login" passHref>
                  <a className="text-accent">Login</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Register;
