import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EmailForm = () => {
  const EmailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={EmailSchema}
      onSubmit={(values) => {
        // same shape as initial values
       
      }}
    >
      {() => (
        <Form className="relative flex items-center justify-center w-full bg-[#F2F2F2] rounded-tl-md rounded-bl-lg max-w-lg">
          <Field
            name="email"
            type="email"
            className="flex-1 p-3 pl-5 bg-[#F2F2F2] w-full rounded-tl-md rounded-bl-lg outline-none"
            placeholder="Email address"
          />
          <ErrorMessage name="email">
            {(msg) => (
              <p className="absolute left-0 text-xs text-red-500 -bottom-5">
                {msg}
              </p>
            )}
          </ErrorMessage>
          <button
            type="submit"
            className="px-5 py-3 text-xs md:text-sm font-medium text-white rounded-md md:px-10 bg-accent"
          >
            Get started
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
