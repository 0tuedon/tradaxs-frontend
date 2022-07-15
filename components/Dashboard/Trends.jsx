import React from "react";
import { MdSwapHoriz } from "react-icons/md";
import { RiArrowRightUpFill, RiArrowLeftDownFill } from "react-icons/ri";
import Image from "next/image";
import Path2 from "../../assets/svg/Path 2-1.svg";
import Path4 from "../../assets/svg/Path 2-3.svg";
import Path3 from "../../assets/svg/Path 2-2.svg";
import Path1 from "../../assets/svg/Path 2.svg";

const Trends = () => {
  return (
    <div className="flex-1 text-textGray">
      <h1 className="mb-5 text-sm uppercase text-textGray">Trend</h1>
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="w-full lg:w-44">
          <span className="flex items-center justify-between mb-2 opacity-70">
            <span className="flex items-center justify-between space-x-3">
              <p className="text-xs font-medium">BTC</p>
              <MdSwapHoriz className="w-3 h-3" />
              <p className="text-xs font-medium">USD</p>
            </span>
            <span className="text-[#E3507A] flex items-center">
              <RiArrowLeftDownFill className="w-3 h-3" />
              <p className="text-xs">-5.5%</p>
            </span>
          </span>
          <h4>7,356.67</h4>
          <Image src={Path1} alt="path" />
        </div>

        <div className="w-full lg:w-44">
          <span className="flex items-center justify-between mb-2 opacity-70">
            <span className="flex items-center justify-between space-x-3">
              <p className="text-xs font-medium">ETH</p>
              <MdSwapHoriz className="w-3 h-3" />
              <p className="text-xs font-medium">USD</p>
            </span>
            <span className="text-[#50E3C2] flex items-center">
              <RiArrowRightUpFill className="w-3 h-3" />
              <p className="text-xs">-5.5%</p>
            </span>
          </span>
          <h4>7,356.67</h4>
          <Image src={Path2} alt="path" />
        </div>

        <div className="w-full lg:w-44">
          <span className="flex items-center justify-between mb-2 opacity-70">
            <span className="flex items-center justify-between space-x-3">
              <p className="text-xs font-medium">LTE</p>
              <MdSwapHoriz className="w-3 h-3" />
              <p className="text-xs font-medium">USD</p>
            </span>
            <span className="text-[#50E3C2] flex items-center">
              <RiArrowRightUpFill className="w-3 h-3" />
              <p className="text-xs">+75.69%</p>
            </span>
          </span>
          <h4>7,356.67</h4>
          <Image src={Path3} alt="path" />
        </div>

        <div className="w-full lg:w-44">
          <span className="flex items-center justify-between mb-2 opacity-70">
            <span className="flex items-center justify-between space-x-3">
              <p className="text-xs font-medium">BTC</p>
              <MdSwapHoriz className="w-3 h-3" />
              <p className="text-xs font-medium">IDR</p>
            </span>
            <span className="text-[#50E3C2] flex items-center">
              <RiArrowRightUpFill className="w-3 h-3" />
              <p className="text-xs">+13%</p>
            </span>
          </span>
          <h4>7,356.67</h4>
          <Image src={Path4} alt="path" />
        </div>
      </div>
    </div>
  );
};

export default Trends;
