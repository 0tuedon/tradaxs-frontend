import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { createWalletReq, getAllAssets } from "../../services/walletServices";
import jsCookies from "js-cookies";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { AllCoinAssets } from "../../data/static/Assets";
const CreateWallet = ({ handle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinType, setCoinType] = useState(AllCoinAssets);
  const submitHandler = async (values) => {
    setIsLoading(true);
    values.userId = +jsCookies.getItem("userId");
    const { data, err } = await createWalletReq(values);
    if (data) {
      toast.success(`${values.coin_type} wallet created successfully`);
      setTimeout(() => {
        handle();
      }, 1000);
    } else {
      toast.error(`${values.coin_type} ${err?.message || err?.error}`);
      setIsLoading(false);
    }
  };
  const Formik = useFormik({
    initialValues: { coin_type: "BTC" },
    onSubmit: submitHandler,
    validationSchema: Yup.object({ coin_type: Yup.string().required() }),
  });

  // useEffect
  useEffect(() => {
    const getCoinTypes = async () => {
      let { data, err } = await getAllAssets(jsCookies.getItem("accessToken"));
      data = data || AllCoinAssets;

      return {
        data: data || AllCoinAssets,
      };
    };
    getCoinTypes();
  }, []);
  return (
    <div className="text-white">
      <ToastContainer autoClose={700} />
      <div
        onClick={handle}
        className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"
      ></div>
      <div
        className="md:max-w-[40.375rem] 
        w-full absolute top-1/2 
        left-1/2 z-50 -translate-x-1/2 max-w-[95%]
        -translate-y-1/2 bg-landingBlue rounded-[0.625rem] min-h-fit py-[2.0625rem] px-[2.25rem]"
      >
        <h1>Create Wallets</h1>

        <form onSubmit={Formik.handleSubmit} className="relative w-full mt-5">
          <label className="block mb-4 text-sm font-medium capitalize">
            Coin Type
          </label>
          <select
            name={"coin_type"}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            className={`text-black 
                  flex-1 p-3 pl-5 block 
                  bg-[#F2F2F2] w-full rounded-md outline-none
                   mt-1 text-sm font-normal mb-[4px]`}
          >
            {coinType.map((data) => (
              <option key={data.id} value={data?.asset_name}>
                {data?.asset_name}
              </option>
            ))}
          </select>

          {Formik.errors.coin_type && Formik.touched.coin_type && (
            <p className="mt-1 text-xs text-red-500">Field</p>
          )}

          <button
            type="submit"
            className={`font-medium 
                  w-fit ml-auto 
                  mr-0 block 
                  mt-3
                  ${isLoading ? "bg-accent" : "bg-white"} 
                  text-landingBlue 
                  rounded-[0.3125rem] 
                  px-[1.6875rem] 
                  py-[0.4375rem]
                   md:text-sm`}
          >
            {isLoading ? <Loading /> : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateWallet;
