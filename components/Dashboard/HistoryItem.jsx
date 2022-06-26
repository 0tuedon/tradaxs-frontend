import { BsCurrencyBitcoin } from "react-icons/bs";

const HistoryItem = () => {
  return (
    <div className="flex items-center justify-between transition-transform duration-200 text-textGray group hover:scale-105 hover:bg-[rgba(41,37,88,0.536345)] rounded-full p-3 cursor-pointer">
      <span className="flex items-center justify-start space-x-2">
        <BsCurrencyBitcoin className="w-6 h-6 rounded-full group-hover:bg-textblue group-hover:text-white" />
        <h4 className="text-sm font-medium">Otuedon Otueddy</h4>
      </span>
      <span className="flex items-center justify-start space-x-3">
        <p className="text-xs text-green-500">+2.15</p>
        <p className="text-xs">{new Date().toLocaleDateString()}</p>
      </span>
    </div>
  );
};

export default HistoryItem;
