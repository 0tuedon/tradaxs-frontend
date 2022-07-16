import React from "react";
import { IoIosEye } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";

const AdCard = ({ data: { price, trade, available, limit, payment } }) => {
  return (
    <div className="flex justify-between items-center font-medium border-b pb-3">
      <div>
        <p className="text-xs opacity-70 mb-1">Price</p>
        <h2 className="mb-1 text-lg">{price}</h2>
        <p className="text-xs opacity-70 mb-1">
          Amount&nbsp;&nbsp;&nbsp;
          <span>
            {available} {trade}
          </span>
        </p>
        <p className="text-xs opacity-70">
          Limit&nbsp;&nbsp;&nbsp;
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(limit[0])}
            -
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(limit[1])}
          </span>
        </p>
        <p className="text-[0.625rem] capitalize mt-2 bg-white/70 text-accent w-fit px-2 py-1 rounded-sm">
          {payment}
        </p>
      </div>
      <span className="flex items-center justify-start gap-2 text-white">
        <MdModeEdit className="w-5 h-5 cursor-pointer" />
        <IoIosEye className="w-5 h-5 cursor-pointer" />
        <RiDeleteBin4Fill className="w-5 h-5 cursor-pointer" />
      </span>
    </div>
  );
};

export default AdCard;
