import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoAccent from "../assets/icons/LogoAccent";
import Link from "next/link";
import Input from "../components/Input";

const Login = () => {
  //validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(6, "Field must be at least 6 characters long"),
  });

  return (
    <section className="grid max-w-full min-h-screen p-5 md:px-10 bg-bgray place-items-center">
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
          Login to Dashboard
        </h1>
        <p className="text-xs text-center md:text-sm opacity-70">
          Enter your details to login
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
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
              <Input
                as="label"
                label={
                  <span className="flex items-center justify-between w-full">
                    <span>Password</span>
                    <Link href="/" passHref>
                      <a className="text-xs text-accent">Forgot password?</a>
                    </Link>
                  </span>
                }
                name="password"
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="block w-full px-5 py-3 mt-8 text-sm font-medium text-center text-white rounded-md bg-accent"
              >
                Login
              </button>
              <p className="mt-4 text-xs text-center md:text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" passHref>
                  <a className="text-accent">Sign up</a>
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
