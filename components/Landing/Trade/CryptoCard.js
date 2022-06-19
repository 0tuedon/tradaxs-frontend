import React from "react";
import Image from "next/image";
const CryptoCard = ({bg}) => {
  return (
    <div className={`flex 
    w-[370px] flex-col ${bg}
     ${bg?'':'shadow-[0px 40px 40px 0px #391777]'}
     min-h-[433px]
     rounded-[16px]
     items-center
     gap-y-[20px]
     py-[48px]
     text-white
     `}>
      {/* Image first */}
      <div className="mb-[28px]">
        <Image src={"/icons/bitcoin.svg"} 
        alt={"coin"}
        width={"80px"}
        height={"80px"}
        />
      </div>

      <div className="flex">
        <h4 className="font-semibold text-[32px] ">Bitcoin</h4>
        <p className="text-[18px] font-medium">BTC</p>
      </div>
      {/* Text Sub */}
      <div className="text-center">
        <p>Digital currency in which a record of transactions is maintained.</p>
      </div>

      {/* Button for the crypto card */}
      <button className="flex mt-[5px] gap-x-[20px] items-center">
        <p>
        Start Mining
            </p>
        <Image 
        width={"32px"}
        height={"32px"}
        src={"/icons/small-arrow.svg"}   alt={"arrow"} />  
        </button>
    </div>
  );
};

export default CryptoCard;
