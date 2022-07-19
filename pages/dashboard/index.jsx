import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import LineChart from "../../components/Dashboard/Chart";
import History from "../../components/Dashboard/History";
import Trends from "../../components/Dashboard/Trends";
import Wallets from "../../components/Dashboard/Wallets";
import AuthLayout from "../../components/Layouts/AuthLayout";
//import TradeViewChart from "react-crypto-chart";
import dynamic from "next/dynamic";

const CryptoChart = dynamic(() => import("react-crypto-chart"), {
  ssr: false,
});

const Profile = () => {
  useEffect(() => {
    const loginmodal = localStorage.getItem("login-modal");
    if (loginmodal) {
      toast.success("Successfully Logged In");
      localStorage.removeItem("login-modal");
    } else {
    }
  }, []);
  return (
    <AuthLayout>
      <ToastContainer autoClose={1000} />
      <section className="w-full text-white md:pt-4">
        <Wallets />
        <div className="w-full max-w-full my-10 h-80 lg:h-96">
          {/* <LineChart /> */}
          <CryptoChart
            pair="BTCBUSD"
            chartLayout={{
              layout: {
                backgroundColor: "#0C4DAE",
                textColor: "#ffffff",
              },
              grid: {
                vertLines: {
                  color: "transparent",
                  // style: LineStyle.SparseDotted,
                },
                horzLines: {
                  color: "transparent",
                  // style: LineStyle.SparseDotted,
                },
              },
              // crosshair: {
              //   mode: CrosshairMode.Normal,
              // },
              priceScale: {
                borderColor: "#485c7b",
              },
              timeScale: {
                borderColor: "#485c7b",
                timeVisible: true,
                secondsVisible: false,
              },
            }}
            containerStyle={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col mt-5 mb-10 space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
          <Trends />
          <History />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;
