/* eslint-disable @next/next/no-img-element */
import React,{useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import PropTypes from "prop-types";

const TopBar = ({ title }) => {
    const [isMenuActive, setMenuActive] = useState(false);
  const handleToggle = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className="md:flex  hidden justify-between w-[100%]">
        {/* left side */}
        <div
          className="flex 
        gap-x-[71px]
        items-center
        justify-between
        "
        >
          <h5
            className="text-titlegray
            text-[24px]
            font-medium
            "
          >
            Dashboard
          </h5>
          {/* end of left side */}
          <div className="flex items-center gap-x-[10px]">
            <h6
              className="text-[18px] 
            text-accent
            font-medium"
            >
              Crypto
            </h6>
            {/* line seperation */}
            <img src="/icons/line.svg" alt="line" />
            <h6
              className="text-[18px] 
            text-subgray
            font-medium"
            >
              Stocks
            </h6>
          </div>
        </div>
        {/* Right side */}
        <div
          className="px-[2px] 
      gap-x-[40px]
      flex items-center"
        >
          <div
            className="flex
        gap-x-[7px]
        items-center"
          >
            <img
              width={"28px"}
              height={"20px"}
              src="/icons/credit-card.svg"
              alt="credit-card"
            />
            <p className="text-[18px] text-dark font-medium">
              Connect to wallet
            </p>
          </div>
          {/* Avatar */}
          <div className="cursor-pointer">
            <img src="/icons/avatar.svg" alt="user avatar" />
          </div>
          <div></div>
        </div>
      </div>
      {/* Smaller Screens */}
      <div className="flex md:hidden 
      items-center
      px-[30px] justify-between bg-accent w-screen">
        {/* left side */}
        <div className="">
          <a href="/dashboard">
            <img src="/icons/tradaxs.svg" alt="Tradaxs logo" />
          </a>
        </div>
        {/* Hamburger */}
        <button className="md:hidden" onClick={handleToggle}>
          <AiOutlineMenu className="text-white w-7 h-7" />
        </button>
      </div>
    </>
  );
};

TopBar.propTypes = {};

export default TopBar;
