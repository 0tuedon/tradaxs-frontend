import React, { useEffect, useState } from "react";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { IoIosCopy } from "react-icons/io";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

const Crypto = () => {
  const [isModalOpened, setModalOpened] = useState(false);
  const handleSend = () => {
    setModalOpened(!isModalOpened);
  };
  const coin = useRouter().query;
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="relative mb-24">
          <div className="md:max-w-[35.8rem] w-full max-w-full overflow-hidden bg-landingBlue rounded-[0.625rem] min-h-[24.375rem] py-[2.0625rem] px-[2.25rem]">
            <span className="flex items-center justify-between mb-[4.75rem]">
              <span className="mb-[0.375rem]">
                <h2 className="text-base uppercase md:text-[2.5rem] md:leading-[3.75rem]">
                  {coin.crypto}
                </h2>
                <p className="text-xs">0.067890</p>
              </span>
              <span>
                <h4 className="text-sm opacity-50 leading-[1.3125rem]">
                  Current Price
                </h4>
                <h2 className="text-base md:text-[1.0625rem] leading-[1.6rem]">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(4890)}
                </h2>
              </span>
            </span>
            <span className="mb-[4.5rem] block max-w-full">
              <h4 className="text-sm opacity-50 leading-[1.3125rem]">
                Address
              </h4>
              <span className="flex sm:items-center justify-start w-full gap-[1.125rem] flex-col sm:flex-row">
                <h2 className="text-sm 
                uppercase md:text-[1.0625rem] leading-[1.6rem]">
                  0x095418a82bc2439703b69fbe1210824f2247d77c
                </h2>
                <span className="flex-auto">
                  <IoIosCopy className="w-6 h-6 cursor-pointer" />
                </span>
              </span>
            </span>
            <button
              onClick={handleSend}
              className="font-bold w-fit ml-auto mr-0 block bg-white text-landingBlue rounded-[0.3125rem] px-[1.6875rem] py-[0.4375rem] md:text-[1.1rem]"
            >
              Send
            </button>
          </div>
        </div>
        {isModalOpened && (
          <Portal>
            <WalletModal handle={handleSend} />
          </Portal>
        )}
      </section>
    </AuthLayout>
  );
};

export default Crypto;

const WalletModal = ({ handle }) => {
  const submitHandler = (values) => {};
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

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#__next"))
    : null;
};
