import React from "react";
import ArrowRight from "../../../assets/icons/ArrowRight";

const HeroLeft = () => {
  return (
    <div className="flex-col md:w-[50%] gap-y-[22px]  flex">
     
      {/* Heading Sub text */}
      <div className="font-semibold text-white">
        <h1 className=" text-[40px] md:text-[60px]">
          {"Learn and trade your crypto with tradaxs"}
        </h1>
      </div>
      <div className="text-white">
        <p>
        Get trained and exchange digital currencies using 
        different payment methods with us. Create your tradax account to begin
        </p>
      </div>
      {/* Try fo Freee */}
      <div
        className="flex 
      item-center
      justify-center
      bg-lightBlue 
      text-white
      max-w-[200px]
     gap-x-[10px]
      rounded-[32px]
      py-[14px]
      "
      >
        <p
          className="
        text-[18px]
        font-medium
        inline-block"
        >
          Get started
        </p>
        {/* Arrow Right */}
        <ArrowRight />
      </div>
    </div>
  );
};

export default HeroLeft;
