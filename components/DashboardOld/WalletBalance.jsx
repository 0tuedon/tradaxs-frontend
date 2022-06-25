import React from "react";
import Spark from "../../assets/icons/Spark";

const WalletBalance = () => {
  return (
    <div className="relative bg-accent min-h-60 md:w-96 w-full rounded-lg text-white p-3">
      <Spark className="h-56 w-44 absolute top-1/2 -translate-y-1/2 right-0 z-0" />
      <div className="relative z-10">
        <h1 className="font-medium mb-5">Wallet balance</h1>
        {/* balance in usd*/}
        <span className="block mb-5">
          <h4 className="text-xs opacity-70 mb-1">Available balance in USD</h4>
          <h2 className="text-xl md:text-2xl">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(34510.15)}
          </h2>
        </span>
        {/*transaction and wallets*/}
        <span className="flex justify-between items-center max-w-xs md:max-w-[15rem] mb-5">
          <span>
            <h5 className="text-xs opacity-70 mb-1">Transactions</h5>
            <h3 className="text-sm md:text-base">34, 405</h3>
          </span>
          <span>
            <h5 className="text-xs opacity-70 mb-1">Wallets</h5>
            <h3 className="text-sm md:text-base text-center">3</h3>
          </span>
        </span>
        {/*account balance in naira*/}
        <span>
          <span className="block mb-5">
            <h4 className="text-xs opacity-70 mb-1">
              Available balance in USD
            </h4>
            <h2 className="text-base md:text-lg">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(34510.15)}
            </h2>
            <p className="text-[0.6rem] opacity-70">
              Last activity at 21 May, 2022
            </p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default WalletBalance;
