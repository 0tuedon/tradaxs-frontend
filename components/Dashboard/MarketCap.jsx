import React from "react";

const MarketCap = () => {
  return (
    <div className="shadow-md p-3 rounded-md flex justify-between flex-col items-start h-full">
      <p className="opacity-70 text-sm mb-5">Market Cap</p>
      <span className="flex justify-between items-center w-full">
        <h2 className="text-base md:text-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(12418.42)}
        </h2>
      </span>
    </div>
  );
};

export default MarketCap;
