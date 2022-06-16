import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoAccent from "../assets/icons/LogoAccent";
import Link from "next/link";
import Input from "../components/Input";
import { registerStructure } from "../data/Register";

const Register = () => {
  //validation schema
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Field is required"),
    username: Yup.string().required("Field is required"),
    email: Yup.string().email("Invalid email").required("Field is required"),
    phone: Yup.string().required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(6, "Field must be at least 6 characters long"),
  });

  return (
    <section className="grid max-w-full min-h-screen p-5 md:px-10 bg-bgray place-items-center">
      <div className="w-full h-auto max-w-md p-5 pb-10 bg-white rounded-md">
        <span className="grid mx-auto mb-5 w-fit place-items-center">
          <LogoAccent className="w-10 h-10" />
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
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
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
                className="block w-full px-5 py-3 mt-8 text-sm font-medium text-center text-white rounded-md bg-accent"
              >
                Sign up
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
