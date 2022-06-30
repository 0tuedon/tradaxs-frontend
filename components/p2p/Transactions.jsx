import React from "react";
import { FaWallet, FaMoneyBill } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";

const Transactions = () => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-5 mb-10 font-medium text-white">
      <div className="flex items-center justify-between p-3 space-x-5 rounded-md w-fit bg-landingBlue">
        <span>
          <FaWallet className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-base md:text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(25000)}
          </h2>
          <p className="text-xs md:text-sm text-black/50">Wallet Balance</p>
        </span>
      </div>
      <div className="flex items-center justify-between p-3 space-x-5 rounded-md bg-landingBlue w-fit">
        <span>
          <FaMoneyBill className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-base md:text-lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(2500)}
          </h2>
          <p className="text-xs md:text-sm text-black/50">Virtual Balance</p>
        </span>
      </div>
      <div className="flex items-center justify-between p-3 space-x-5 rounded-md bg-landingBlue w-fit">
        <span>
          <MdSwapHoriz className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-base md:text-lg">50</h2>
          <p className="text-xs md:text-sm text-black/50">Transactions</p>
        </span>
      </div>
    </div>
  );
};

export default Transactions;
