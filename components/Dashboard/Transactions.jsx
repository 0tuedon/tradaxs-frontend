import Link from "next/link";
import React from "react";
import { FaWallet, FaMoneyBill } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";

const Transactions = () => {
  return (
    <div className="grid max-w-3xl grid-cols-2 mb-10 font-medium text-white md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 md:gap-5 place-items-start justify-content-start">
      <div className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:p-3 bg-landingBlue">
        <span>
          <FaWallet className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-sm sm:text-base md:text-lg">
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
      <div className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:p-3 bg-landingBlue">
        <span>
          <FaMoneyBill className="w-8 h-8" />
        </span>
        <span>
          <h2 className="text-sm sm:text-base md:text-lg">
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
        <a className="flex items-center justify-start w-full h-full max-w-full px-2 py-3 space-x-3 rounded-md sm:p-3 bg-landingBlue">
          <span>
            <MdSwapHoriz className="w-8 h-8" />
          </span>
          <span>
            <h2 className="text-sm sm:text-base md:text-lg">50</h2>
            <p className="text-[0.625rem] sm:text-xs md:text-sm text-black/50">
              Transactions
            </p>
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Transactions;
