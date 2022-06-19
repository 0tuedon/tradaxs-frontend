import React from "react";
import ArrowRight from "../../../assets/icons/ArrowRight";

const HeroLeft = () => {
  return (
    <div className="flex-col md:w-[50%] gap-y-[22px]  flex">
      {/*Black Friday */}
      <div
        className="
      md:max-w-[365px] items-center h-[40px] 
      text-white flex rounded-[32px]
       px-[11px] justify-between 
       bg-transWhite "
      >
        <div
          className="bg-white  z-10 text-textBlue  
        rounded-[20px] 
        text-[14px]
        font-medium
        py-[4px] 
        px-[16px]"
        >
          <p>75% Save</p>
        </div>

        <div>
          <p>For the Black Friday weekend</p>
        </div>
      </div>
      {/* Heading Sub text */}
      <div className="text-white  font-semibold">
        <h1 className=" text-[40px] md:text-[60px]">
          {"Fastest & secure platform to invest in crypto"}
        </h1>
      </div>
      <div className="text-white">
        <p>
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
      </div>
      {/* Try fo Freee */}
      <div className="flex 
      item-center
      justify-center
      bg-lightBlue 
      text-white
      max-w-[200px]
     gap-x-[10px]
      rounded-[32px]
      py-[14px]
      ">
        <p className="
        text-[18px]
        font-medium
        d-inline-block">Try for free</p>
        {/* Arrow Right */}
        <ArrowRight/>
      </div>
    </div>
  );
};

export default HeroLeft;
