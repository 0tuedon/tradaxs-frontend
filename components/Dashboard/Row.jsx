import React from "react";

const Row = ({ data }) => {
  return (
    <tr className="border-b">
      <td className="text-xs py-3 first:pl-3">{data.name}</td>
      <td className="text-xs py-3">{data.marketCup}</td>
      <td className="text-xs py-3">{data.price}</td>
      <td className="text-xs py-3">{data.price}</td>
      <td
        className={`text-xs py-3 ${
          Number(data["7d"]) > 0 ? "text-[#35DC94]" : "text-[#DC3535]"
        }`}
      >
        {data["7d"]}%
      </td>
      <td
        className={`text-xs py-3 ${
          Number(data["30d"]) > 0 ? "text-[#35DC94]" : "text-[#DC3535]"
        }`}
      >
        {data["30d"]}%
      </td>
      <td
        className={`text-xs py-3 ${
          Number(data["1y"]) > 0 ? "text-[#35DC94]" : "text-[#DC3535]"
        }`}
      >
        {data["1y"]}M%
      </td>
      <td
        className={`text-xs py-3 ${
          Number(data.today) > 0 ? "text-[#35DC94]" : "text-[#DC3535]"
        }`}
      >
        {data.today}%
      </td>
    </tr>
  );
};

export default Row;
