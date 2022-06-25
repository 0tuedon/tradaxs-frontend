import React from "react";
import Link from "next/link";
import ProgressBar from "react-customizable-progressbar";

const LimitCard = () => {
  return (
    <div className="shadow-md p-3 rounded-md flex justify-between items-center bg-white">
      <span>
        <p className="opacity-70 mb-3 text-sm">
          You have reached 70% of your daily deposit of $10,000
        </p>
        <Link href="/" passHref>
          <a className="text-accent text-sm">Expand limit</a>
        </Link>
      </span>
      <ProgressBar
        progress={70}
        radius={40}
        strokeWidth={5}
        trackStrokeWidth={5}
        strokeColor="#1B3593"
        className="relative"
      
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h4 className="font-medium">70%</h4>
          <p className="text-xs opacity-70">Limit</p>
        </span>
      </ProgressBar>
    </div>
  );
};

export default LimitCard;
