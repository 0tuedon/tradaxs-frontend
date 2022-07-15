import React, { useState } from "react";
import Portal from "../Portal";
import CreateWallet from "./CreateWallet";

const NoWalletModal = ({ handleClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const handle = async () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={handleClose}
        className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"
      ></div>
      <div className="md:max-w-[30rem] w-full max-w-[95%] absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-landingBlue rounded-[0.625rem] min-h-fit py-[2.0625rem] px-[2.25rem]">
        <p className="text-sm text-white md:text-base mb-5 text-center font-medium">
          No wallet found
        </p>
        <button
          onClick={handle}
          className={`font-medium w-fit mx-auto block bg-white text-landingBlue rounded-[0.3125rem] px-[1.6875rem] py-[0.4375rem] text-xs md:text-sm transition-transform duration-200 hover:scale-105`}
        >
          Create a new wallet
        </button>
      </div>
      {openModal && (
        <Portal>
          <CreateWallet handle={handle} />
        </Portal>
      )}
    </div>
  );
};

export default NoWalletModal;
