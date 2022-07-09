import Link from "next/link";
import React, { useState } from "react";
import { FaWallet, FaMoneyBill } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";
import { Portal } from "../../pages/wallet/[crypto]";
import { getProfileDetailsReq } from "../../services/profileServices";
import CreateWallet from "../Modals/CreateWallet";

const Transactions = () => {
  const [openModal,setOpenModal] = useState(false);
  const handle = async()=>{
    setOpenModal(prev=>!prev)
    const {data,err} = await getProfileDetailsReq()
    console.log(data)
  }
  return (
    <>
    <div className="grid grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 mb-10 
    font-medium text-white gap-x-2 gap-y-3 md:gap-5 
    place-items-start justify-content-start max-w-4xl">
      <div className="flex items-center justify-between px-2 sm:px-5 py-3 sm:p-3 space-x-3 rounded-md w-full max-w-full h-full bg-landingBlue">
        <span>
          <FaWallet className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-xs sm:text-base md:text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(25000)}
          </h2>
          <p className="text-[0.625rem] sm:text-xs md:text-sm text-black/50">
            Wallet Balance
          </p>
        </span>
      </div>
      <div className="flex items-center justify-between px-2 sm:px-5 py-3 sm:p-3 space-x-3 rounded-md bg-landingBlue w-full h-full max-w-full">
        <span>
          <FaMoneyBill className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-xs sm:text-base md:text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(2500)}
          </h2>
          <p className="text-[0.625rem] sm:text-xs md:text-sm text-black/50">
            Virtual Balance
          </p>
        </span>
      </div>
      <Link href="/dashboard/transactions" passHref>
        <a className="flex items-center 
        justify-between px-2 sm:px-5 py-3 sm:p-3 space-x-3 rounded-md bg-landingBlue h-full w-full max-w-full">
          <span>
            <MdSwapHoriz className="w-8 h-8" />
          </span>
          <span>
            <h2 className="text-xs sm:text-base md:text-lg">50</h2>
            <p className="text-[0.625rem] sm:text-xs md:text-sm text-black/50">
              Transactions
            </p>
          </span>
        </a>
      </Link>

      <div 
      onClick={()=>{setOpenModal(true)}}
      className="flex items-center 
      justify-between px-2 sm:px-5 py-3 sm:p-3 space-x-3 
      rounded-md bg-landingBlue w-full 
      cursor-pointer
      h-full ">
        <span>
          <FaMoneyBill className="w-8 h-8" />
        </span>
        <span>
          <p className="text-[0.625rem] sm:text-xs md:text-sm text-black/50">
            Create New wallet
          </p>
        </span>
      </div>
    </div>
    {openModal && 
    <Portal>
      <CreateWallet handle={handle}/>
    </Portal>
    }
    </>
  );
};

export default Transactions;