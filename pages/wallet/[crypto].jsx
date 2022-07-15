import React, { useEffect, useState } from "react";
import Transactions from "../../components/Dashboard/Transactions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { IoIosCopy } from "react-icons/io";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import Cookies from "cookies";
import {
  getUserWalletsReq,
  sendTransactionReq,
} from "../../services/walletServices";
import jsCookies from "js-cookies";
import NoWalletModal from "../../components/Modals/NoWalletModal";
import Portal from "../../components/Portal";

const Crypto = (props) => {
  let { wallet } = props;
  const [isModalOpened, setModalOpened] = useState(false);
  const [isNoWalletModalOpened, setNoWalletModalOpened] = useState(
    !wallet.address ? true : false
  );

  const copied = () => {
    navigator.clipboard.writeText(wallet?.address || "");
    toast.success("Copied to clipboard");
  };
  const handleSend = () => {
    setModalOpened(!isModalOpened);
  };

  const handleCloseNoWalletModal = () => {
    setNoWalletModalOpened(false);
  };
  // const coin = useRouter().query;
  return (
    <AuthLayout>
      <ToastContainer autoClose={500} />
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />

        {wallet.address && (
          <div className="relative mb-24">
            <div className="md:max-w-[35.8rem] w-full max-w-full overflow-hidden bg-landingBlue rounded-[0.625rem] min-h-[24.375rem] py-[2.0625rem] px-[2.25rem]">
              <span className="flex items-center justify-between mb-[4.75rem]">
                <span className="mb-[0.375rem]">
                  <h2 className="text-base uppercase md:text-[2.5rem] md:leading-[3.75rem]">
                    {wallet?.coin_type || ""}
                  </h2>
                  <p className="text-xs">{wallet?.balance || 0}</p>
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
                <span className="flex sm:items-center justify-start w-full md:gap-[1.125rem] flex-col sm:flex-row">
                  <h2 className="text-sm uppercase md:text-[1.0625rem] break-words leading-[1.6rem]">
                    {wallet?.address || "Cant' get Address"}
                  </h2>
                  <span className="flex-auto">
                    <IoIosCopy
                      onClick={copied}
                      className="w-6 h-6 cursor-pointer"
                    />
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
        )}
        {isNoWalletModalOpened && (
          <NoWalletModal handleClose={handleCloseNoWalletModal} />
        )}
        {isModalOpened && (
          <Portal>
            <WalletModal wallet={wallet} handle={handleSend} />
          </Portal>
        )}
      </section>
    </AuthLayout>
  );
};

export default Crypto;

const WalletModal = ({ handle, wallet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async (values) => {
    values.coin_type = wallet?.coin_type;
    values.userId = jsCookies.getItem("userId");
    setIsLoading(true);
    const { data, err } = await sendTransactionReq(values);
    if (data) {
      toast.success("Transaction is being processed");
      setTimeout(() => {
        handle();
      }, 1000);
    } else {
      toast.error(err?.error || err?.msg || "Error");
      setTimeout(() => {
        handle();
      }, 1000);
    }
  };
  return (
    <div className="text-white">
      <ToastContainer autoClose={700} />
      <div
        onClick={handle}
        className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"
      ></div>
      <div className="md:max-w-[40.375rem] w-full max-w-[95%] absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-landingBlue rounded-[0.625rem] min-h-fit py-[2.0625rem] px-[2.25rem]">
        <h1>Send</h1>
        <Formik
          initialValues={{
            amount: "",
            addressTo: "",
          }}
          validationSchema={Yup.object().shape({
            amount: Yup.string().required("Field is required"),
            addressTo: Yup.string()
              .required()
              .min(14, "Wallet address is too short"),
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
              <Input
                as="label"
                label="Recipient Wallet Address"
                name="addressTo"
                type="text"
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

// getServerSideProps

export async function getServerSideProps(context) {
  // getting Cookies
  const cookies = new Cookies(context.req, context.res);
  const Router = context.params;
  const coinType = Router?.crypto || "";
  const tokenId = cookies.get("accessToken");
  const values = {
    userId: cookies.get("userId") || null,
    coin_type: coinType.toUpperCase(),
  };
  // request for userWallet

  const { data, err } = await getUserWalletsReq(values, tokenId);

  return {
    props: {
      wallet: data?.data || {},
    }, // will be passed to the page component as props
  };
}
