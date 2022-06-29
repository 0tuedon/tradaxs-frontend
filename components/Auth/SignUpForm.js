import React, { useState } from "react";
import { useFormik } from "formik";
import { paths } from "../../api/paths";
import * as Yup from "yup";
import { SignupReq } from "../../services/authServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Loading from "../Loading";
const SignUpForm = () => {
  // isLoading state
  const [isLoading, setIsLoading] = useState(false);
  // FORMIK validation
  const initialValues = {
    email: "",
    password: "",
    name: "",
    bvn: "",
    username: "",
    phone: "",
  };
  //
  const submitHandler = async (val) => {
    setIsLoading(true)
    const { data, err } = await SignupReq(val);
    if (data) {
      localStorage.setItem("signup-modal", true);
      Router.push(paths.SIGNIN);
    } else {
    
      setIsLoading(false)
      const [email] = err?.errors?.email || [undefined]
      toast.error(`${err?.msg || "Error"}: 
      ${
        email ||
        err?.errors?.username[0] ||
        " "
      }`);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
    bvn: Yup.string().min(11).max(12).required(),
    name: Yup.string().required(),
    phone: Yup.string().required().min(10),
    username: Yup.string().min(3).required(),
  });
  const Formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
  });
  return (
    <div>
      <ToastContainer
      autoClose={1000}
      />
      <form onSubmit={Formik.handleSubmit} className="">
        {/* Two for one role on desktop */}
        <div
          className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between "
        >
          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Full Name</label>
            <input
              disabled={isLoading}
              name="name"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="Full Name"
            />
            {Formik.errors.name && Formik.touched.name && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.name}
              </p>
            )}
          </div>
          {/* email */}

          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Email</label>
            <input
              name={"email"}
              disabled={isLoading}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="Email"
            />
            {Formik.errors.email && Formik.touched.email && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Two for one role on desktop */}
        <div
          className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between "
        >
          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Username</label>
            <input
              name={"username"}
              disabled={isLoading}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            text-gray2
            focus:outline-buttonBlue"
              placeholder="username"
            />
            {Formik.errors.username && Formik.touched.username && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.username}
              </p>
            )}
          </div>
          {/* email */}

          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>BVN</label>
            <input
              name={"bvn"}
              disabled={isLoading}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            w-4/4
            px-[10px]

            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="BVN"
            />

            {Formik.errors.bvn && Formik.touched.bvn && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.bvn}
              </p>
            )}
          </div>
        </div>
        {/* Two for one role on desktop */}
        <div
          className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between "
        >
          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Contact Number</label>
            <input
              name={"phone"}
              disabled={isLoading}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            text-gray2
            focus:outline-buttonBlue"
              placeholder="Contact Number"
            />
            {Formik.errors.phone && Formik.touched.phone && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.phone}
              </p>
            )}
          </div>
          {/* email */}

          <div
            className="flex 
          mb-[10px] md:mb-[0px]
          flex-col"
          >
            <label>Password</label>
            <input
              name={"password"}
              type={"password"}
              disabled={isLoading}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
              placeholder="Password"
            />

            {Formik.errors.password && Formik.touched.password && (
              <p className="text-red-500 font-italic mt-[3px]">
                {Formik.errors.password}
              </p>
            )}
          </div>
        </div>
        <div
          className="flex mt-[60px] 
        
        md:justify-end"
        >
          <button
          disabled = {isLoading}
            onClick={Formik.handleSubmit}
            className="
        w-[213px]
        disabled:bg-slate-300
            disabled:cursor-not-allowed
        h-[54px]
        rounded-[10px]
        text-white
        bg-buttonBlue"
          >
            {isLoading?<Loading/>:'Sign up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
