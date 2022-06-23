import React from "react";
import Image from "next/image";
import Logo from "../../../assets/icons/Logo";
import {
  FooterPaymentLinks,
  FooterQuickLinks,
  FooterResourceLinks,
} from "../../../data/tradaxs";
import CopyRights from "./CopyRights";
import Link from "next/link";

const LandingFooter = () => {
  return (
    <div
      className="flex flex-col 
    gap-y-[120px] 
    mt-[30px]
    md:mt-[60px] 
    px-[10px]
    md:px-[100px] "
    >
      {/* fotter wi */}
      <div className="flex flex-col gap-y-[30px] md:flex-row justify-between">
        <div className="flex items-start gap-x-3">
          <Logo className={"w-[40px]"} />
          <h5 className="text-white text-[18px] font-semibold">TRADAXS</h5>
        </div>
        <div className="flex">
          <div
            className="flex w-[200px]
             gap-x[35px] text-white flex-col
             gap-y-[10px]
             "
          >
            <h6 className="font-medium text-[20px]">Quick Link</h6>
            {FooterQuickLinks.map((data) => (
              <Link key={data.name} href={data.route} passHref>
                <a className="text-sm transition-all duration-200 opacity-70 hover:opacity-100 hover:underline">
                  {data.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="text-white flex flex-col  gap-y-[10px]">
            <h6 className="font-medium text-[20px]">Resources</h6>
            {FooterResourceLinks.map((data) => (
              <Link key={data.name} href={data.route} passHref>
                <a className="text-sm transition-all duration-200 opacity-70 hover:opacity-100 hover:underline">
                  {data.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        {/* Payments accepted */}
        <div className="text-[32px] flex flex-col font-medium text-white w-[355px]">
          <h5>We accept the following Payments</h5>
          <div className="flex mt-[40px]">
            {FooterPaymentLinks.map((data) => (
              <Image
                width={"86px"}
                height={"54px"}
                key={data.path}
                alt={data.path}
                src={data.path}
              />
            ))}
          </div>
        </div>
      </div>

      <CopyRights />
    </div>
  );
};

export default LandingFooter;
