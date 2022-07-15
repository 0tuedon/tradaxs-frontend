import Link from "next/link";
import React, { useState } from "react";
import { FaWallet, FaMoneyBill } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";
import { getProfileDetailsReq } from "../../services/profileServices";
import CreateWallet from "../Modals/CreateWallet";
import Portal from "../Portal";

const Transactions = () => {
  const [openModal, setOpenModal] = useState(false);
  const handle = async () => {
    setOpenModal((prev) => !prev);
    const { data, err } = await getProfileDetailsReq();
  };
  return (
    <>
      <div className="grid max-w-4xl grid-cols-2 mb-10 font-medium text-white md:grid-cols-3 lg:grid-cols-4 gap-x-2 xs:gap-x-10 gap-y-3 md:gap-3 lg:gap-5 place-items-start justify-content-start">
        <div className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:px-5 sm:p-3 bg-landingBlue">
          <span>
            <FaWallet className="w-8 h-8" />
          </span>
          <span>
            <h2 className="text-sm sm:text-base lg:text-lg">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(25000)}
            </h2>
            <p className="text-[0.625rem] md:text-xs text-white/50">
              Wallet Balance
            </p>
          </span>
        </div>
        <div className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:p-3 bg-landingBlue">
          <span>
            <FaMoneyBill className="w-8 h-8" />
          </span>
          <span>
            <h2 className="text-sm sm:text-base lg:text-lg">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(2500)}
            </h2>
            <p className="text-[0.625rem] md:text-xs text-white/50">
              Virtual Balance
            </p>
          </span>
        </div>
        <Link href="/dashboard/transactions" passHref>
          <a className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:px-5 sm:p-3 bg-landingBlue">
            <span>
              <MdSwapHoriz className="w-8 h-8" />
            </span>
            <span>
              <h2 className="text-sm sm:text-base lg:text-lg">50</h2>
              <p className="text-[0.625rem] md:text-xs text-white/50">
                Transactions
              </p>
            </span>
          </a>
        </Link>

        <div
          onClick={() => {
            setOpenModal(true);
          }}
          className="flex items-center justify-start w-full h-full px-2 py-3 space-x-3 transition-transform duration-200 rounded-md cursor-pointer sm:px-5 sm:p-3 bg-[rgba(12,77,174,0.37)] hover:scale-105 focus:scale-105"
        >
          <span>
            <FaMoneyBill className="w-8 h-8" />
          </span>
          <span>
            <p className="text-[0.625rem] sm:text-xs text-white">
              Create New wallet
            </p>
          </span>
        </div>
      </div>
      {openModal && (
        <Portal>
          <CreateWallet handle={handle} />
        </Portal>
      )}
    </>
  );
};

export default Transactions;
