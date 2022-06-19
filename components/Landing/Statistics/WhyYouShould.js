import React from "react";
import Image from "next/image";
const WhyYouShould = () => {
  return (
    <div
      className="flex flex-col 
      px-[10px]
      md:flex-row mt-[30px] 
    md:items-center mb-[20px] md:justify-between md:px-[100px]"
    >
      {/* Left Side  */}
      <div className="order-2 md:order-1">
        <Image
          width={"650px"}
          height={"473px"}
          src={"/image/why-you-should.png"}
          alt={"Why should us"}
        />
      </div>

      {/* Why should you text */}
      <div
        className="flex  
      gap-y-[24px]
      justify-center
      order-1 md:order-2
      text-white flex-col md:w-2/4 "
      >
        <h2
          className="font-semibold 
        text-[40px]"
        >
          Why you should choose TRADAXS
        </h2>
        <div className="max-w-[409px]">
          <p className="text-[16px]">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
        </div>
        {/* learn more button */}
        <button className="bg-lightBlue max-w-[146px] min-h-[46px] rounded-[32px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyYouShould;
