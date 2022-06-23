import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Chart from "../../assets/icons/Chart";

const MarketCap = () => {
  return (
    <div className="shadow-md p-3 rounded-md flex justify-between flex-col items-start h-full bg-white">
      <p className="opacity-70 text-sm mb-5">Market Cap</p>
      <span className="flex justify-between items-center w-full">
        <h2 className="text-base md:text-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(12418.42)}
        </h2>
        <span className="relative w-fit">
          <Chart className="w-14 h-6" stroke="#35DC94" />
          <p className="text-xs text-[#35DC94]">+10</p>
          <AiOutlineArrowUp className="w-4 h-4 text-[#35DC94] absolute top-7 right-0" />
        </span>
      </span>
    </div>
  );
};

export default MarketCap;
