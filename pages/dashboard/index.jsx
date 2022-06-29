import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import LineChart from "../../components/Dashboard/Chart";
import History from "../../components/Dashboard/History";
import Trends from "../../components/Dashboard/Trends";
import Wallets from "../../components/Dashboard/Wallets";
import AuthLayout from "../../components/Layouts/AuthLayout";

const Profile = () => {
  useEffect(()=>{
    const loginmodal = localStorage.getItem("login-modal")
    if(loginmodal){
      toast.success("Successfully Logged In")
      localStorage.removeItem("login-modal")
    }
    else {

    }
  },[])
  return (
    <AuthLayout>
       <ToastContainer
      autoClose={1000}
      />
      <section className="w-full pt-4 text-white">
        <Wallets />
        <div className="w-full max-w-full">
          <LineChart />
        </div>
        <div className="flex flex-col mt-5 mb-10 min-h-64 lg:flex-row md:space-x-10">
          <Trends />
          <History />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;
