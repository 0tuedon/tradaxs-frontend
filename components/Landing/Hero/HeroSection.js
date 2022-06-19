import React from "react";
import Image from "next/image";
import HeroLeft from "./HeroLeft";

const HeroSection = () => {
  return (
    <div className="flex mt-[100px] px-[120px]">

      {/* Left side  */}
      <HeroLeft />
      <div>
        <Image
          width={"580px"}
          height={"505px"}
          src={"/image/hero.png"}
          alt={"hero"}
        />
      </div>
    </div>
  );
};

export default HeroSection;
