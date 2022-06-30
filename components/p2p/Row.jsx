import React from "react";

const Row = ({ data }) => {
  return (
    <tr>
      <td className="p-3 text-xs lg:text-sm first:pl-6">{data.advertiser}</td>
      <td className="p-3 text-xs lg:text-sm">{data.price} USD</td>
      <td className="flex flex-col gap-2 p-3 text-xs lg:text-sm">
        <span>
          <span className="font-medium">Available</span>&nbsp; {data.available}{" "}
          USDT
        </span>
        <span>
          <span className="font-medium">Limit</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(data.limit[0])}
          -
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(data.limit[1])}
        </span>
      </td>
      <td className="p-3 text-xs capitalize">{data.payment}</td>
      <td className="p-3">
        <button className="px-6 py-2 text-xs font-bold bg-white rounded-md text-accent">
          Buy {data.trade}
        </button>
      </td>
    </tr>
  );
};

export default Row;
