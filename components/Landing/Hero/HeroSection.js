import React from "react";
import Image from "next/image";
import HeroLeft from "./HeroLeft";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row 
    mt-[30px]
    px-[10px]
    md:mt-[100px] md:px-[120px]">

      {/* Left side  */}
      <HeroLeft />
      <div>
        <Image
          width={"684px"}
          height={"463px"}
          src={"/image/hero.png"}
          alt={"hero"}
        />
      </div>
    </div>
  );
};

export default HeroSection;
