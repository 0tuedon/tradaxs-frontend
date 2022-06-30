import React from "react";

const Row = ({ data }) => {
  return (
    <tr>
      <td className="text-xs py-3 lg:text-sm first:pl-6">{data.advertiser}</td>
      <td className="text-xs py-3 lg:text-sm">{data.price} USD</td>
      <td className="text-xs py-3 lg:text-sm flex flex-col gap-2">
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
      <td className="text-xs py-3 capitalize lg:text-sm">{data.payment}</td>
      <td className="py-3">
        <button className="bg-white rounded-md text-accent text-xs py-2 font-bold px-3">
          Buy {data.trade}
        </button>
      </td>
    </tr>
  );
};

export default Row;
