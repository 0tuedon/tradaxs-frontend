import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const HistoryItem = dynamic(() => import("./HistoryItem"), {
  ssr: false,
});

const History = () => {
  return (
    <div className="w-full sm:max-w-sm">
      <span className="flex items-center justify-between w-full mb-3">
        <h1 className="text-sm uppercase text-textGray">History</h1>
        <Link href="/" passHref>
          <a className="text-xs capitalize text-textblue hover:underline">
            see all
          </a>
        </Link>
      </span>
      <div className="">
        {Array(5)
          .fill()
          .map((item, i) => (
            <HistoryItem key={i} />
          ))}
      </div>
    </div>
  );
};

export default History;
