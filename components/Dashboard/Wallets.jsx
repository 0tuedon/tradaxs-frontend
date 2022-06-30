import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowRightUpFill, RiArrowLeftDownFill } from "react-icons/ri";
import { Positive, Negative } from "../../assets/icons/Chart";

const Wallets = () => {
  return (
    <div>
      <h2 className="mb-3 text-xs font-medium uppercase opacity-70">Wallets</h2>
      <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-3 md:gap-5">
        <div className="flex items-center justify-between p-3 space-x-5 rounded-md walletCard w-fit">
          <BsCurrencyBitcoin className="w-8 h-8" />
          <span>
            <span className="flex items-center justify-between space-x-3">
              <h3>1.9245</h3>
              <h5 className="text-xs font-medium opacity-70">BTC</h5>
            </span>
            <span className="flex items-center justify-between space-x-1 text-[#50E3C2]">
              <Positive className="w-8 h-8" />
              <RiArrowRightUpFill className="w-3 h-3" />
              <p className="text-xs">+12,5%</p>
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between p-3 space-x-5 border border-black rounded-md w-fit opacity-70">
          <FaEthereum className="w-8 h-8" />
          <span>
            <span className="flex items-center justify-between space-x-3">
              <h3>23.234</h3>
              <h5 className="text-xs font-medium opacity-70">ETH</h5>
            </span>
            <span className="flex items-center justify-between space-x-1 text-[#E3507A]">
              <Negative className="w-8 h-8" />
              <RiArrowLeftDownFill className="w-3 h-3" />
              <p className="text-xs">-5.23%</p>
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between p-3 space-x-5 border border-black rounded-md w-fit opacity-70">
          <SiLitecoin className="w-8 h-8" />
          <span>
            <span className="flex items-center justify-between space-x-3">
              <h3>380.234</h3>
              <h5 className="text-xs font-medium opacity-70">LTC</h5>
            </span>
            <span className="flex items-center justify-between space-x-1 text-[#50E3C2]">
              <Positive className="w-8 h-8" />
              <RiArrowRightUpFill className="w-3 h-3" />
              <p className="text-xs">+12,5%</p>
            </span>
          </span>
        </div>

        <button className="flex items-center justify-between py-8 space-x-1 text-xs border border-black border-dashed rounded-md px-7 opacity-70">
          <AiOutlinePlus className="w-4 h-4" /> <span>Add Currency</span>
        </button>
      </div>
    </div>
  );
};

export default Wallets;
