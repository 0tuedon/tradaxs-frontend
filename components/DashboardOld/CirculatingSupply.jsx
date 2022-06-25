import React from "react";

const CirculatingSupply = () => {
  return (
    <div className="shadow-md p-3 rounded-md flex justify-between flex-col items-start bg-white">
      <p className="opacity-70 text-sm mb-5">Circulating Supply</p>
      <span className="flex justify-between items-center w-full">
        <h2 className="text-base md:text-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(8619.23)}
        </h2>
        <h2 className="opacity-70 font-medium">ETH</h2>
      </span>
    </div>
  );
};

export default CirculatingSupply;
