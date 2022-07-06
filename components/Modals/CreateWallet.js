import { Formik, Form } from "formik";
import Input from "../../components/Input";
import * as Yup from 'yup'
import { createWalletReq } from "../../services/walletServices";
import jsCookies from "js-cookies";
const CreateWallet = ({ handle }) => {
    const submitHandler = async (values) => {
        let user = jsCookies.getItem("user")
        if(user){
            user = JSON.parse(user)
            console.log(user)
            values.userId = user.id
            values.coin_type="BTC"
            const {data,err} = await createWalletReq(values)
            console.log(data)
        }
       
    };
    return (
      <div className="text-white">
        <div
          onClick={handle}
          className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"
        ></div>
        <div className="md:max-w-[40.375rem] w-full max-w-full absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-landingBlue rounded-[0.625rem] min-h-fit py-[2.0625rem] px-[2.25rem]">
          <h1>Send</h1>
          <Formik
            initialValues={{
              amount: "",
            }}
            validationSchema={Yup.object().shape({
              amount: Yup.string().required("Field is required"),
            })}
            onSubmit={(values) => {
              // same shape as initial values
              submitHandler(values);
            }}
          >
            {() => (
              <Form className="relative w-full mt-5">
                <Input
                  as="label"
                  label="Amount"
                  name="amount"
                  type="number"
                  color="text-black"
                />
                <button
                  type="submit"
                  className="font-medium w-fit ml-auto mr-0 block bg-white text-landingBlue rounded-[0.3125rem] px-[1.6875rem] py-[0.4375rem] md:text-sm"
                >
                  Confirm
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };
  export default CreateWallet
  