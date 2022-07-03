import { Formik, Form, Field, ErrorMessage } from "formik";

const Input = ({ label, as, name, color = "", ...props }) => {
  return (
    <Field as={as} className="block mb-4 text-sm font-medium capitalize">
      {label}
      <Field
        name={name}
        {...props}
        className={`${color} flex-1 p-3 pl-5 block bg-[#F2F2F2] w-full rounded-md outline-none mt-1 text-sm font-normal`}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
    </Field>
  );
};

export default Input;
