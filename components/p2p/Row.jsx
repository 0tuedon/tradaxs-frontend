import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";

const TransactionRow = ({ data }) => {
  return (
    <tr>
      <td className="p-3 text-xs uppercase lg:text-sm first:pl-6">
        {data.coin}
      </td>
      <td className="p-3 text-xs lg:text-sm">{data.to_address}</td>
      <td className="p-3 text-xs lg:text-sm">{data.from_address}</td>
      <td className="p-3 text-xs lg:text-sm">{data.payment}</td>
      <td className="p-3 text-xs lg:text-sm">{data.amount}</td>
    </tr>
  );
};

const Row = ({ data, type, handleToggle = () => {} }) => {
  if (type === "transactions") {
    return <TransactionRow data={data} />;
  }
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
      {type === "p2p" && (
        <td className="p-3">
          <button
            className="px-6 py-2 text-xs font-bold bg-white rounded-md text-accent"
            onClick={handleToggle}
          >
            Buy {data.trade}
          </button>
        </td>
      )}
      {type === "ads" && (
        <td>
          <span className="flex items-center justify-start gap-2 text-white">
            <MdModeEdit className="w-5 h-5 cursor-pointer" />
            <IoIosEye className="w-5 h-5 cursor-pointer" />
            <RiDeleteBin4Fill className="w-5 h-5 cursor-pointer" />
          </span>
        </td>
      )}
    </tr>
  );
};

export default Row;
