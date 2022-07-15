import React from "react";

const TransactionCard = ({
  data: { from_address, to_address, amount, coin, payment },
}) => {
  return (
    <div className="border-b pb-3">
      <div className="flex justify-between items-center font-medium">
        <span>
          <p className="text-xs mb-1">
            <span className="opacity-70">From:&nbsp;&nbsp;</span>{" "}
            <span className="sm:text-sm">{from_address}</span>
          </p>
          <p className="text-xs mb-1">
            <span className="opacity-70">To:&nbsp;&nbsp;</span>
            <span className="sm:text-sm">{to_address}</span>
          </p>
        </span>
        <span>
          <p className="text-sm mb-1">
            {amount}&nbsp;&nbsp;
            <span className="uppercase opacity-70 text-xs">{coin}</span>
          </p>
          <p className="text-xs opacity-70 mb-1">Completed</p>
        </span>
      </div>
      <p className="text-[0.625rem] capitalize mt-2 bg-white/70 text-accent w-fit px-2 py-1 rounded-sm">
        {payment}
      </p>
    </div>
  );
};

export default TransactionCard;
