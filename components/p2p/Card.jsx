import React from "react";

const Card = ({
  data: { price, trade, available, limit, payment },
  handleToggle = () => {},
}) => {
  return (
    <div className="flex justify-between items-center font-medium border-b pb-3">
      <div>
        <p className="text-xs opacity-70 mb-1">Price</p>
        <h2 className="mb-1 text-lg">{price} USD</h2>
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
            &nbsp; - &nbsp;
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
      <button
        className="px-5 py-2 text-xs font-semibold bg-white rounded-md text-accent"
        onClick={handleToggle}
      >
        Buy {trade}
      </button>
    </div>
  );
};

export default Card;
