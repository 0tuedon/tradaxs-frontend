import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Chart from "../../assets/icons/Chart";

const FullyDiluted = () => {
  return (
    <div className="shadow-md p-3 rounded-md flex justify-between flex-col items-start h-full bg-white">
      <p className="opacity-70 text-sm mb-5">Fully Diluted</p>
      <span className="flex justify-between items-center w-full">
        <h2 className="text-base md:text-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(17619.34)}
        </h2>
        <span className="relative w-fit">
          <Chart className="w-14 h-6" stroke="#DC3535" />
          <p className="text-xs text-[#DC3535]">-15</p>
          <AiOutlineArrowDown className="w-4 h-4 text-[#DC3535] absolute top-7 right-0" />
        </span>
      </span>
    </div>
  );
};

export default FullyDiluted;
