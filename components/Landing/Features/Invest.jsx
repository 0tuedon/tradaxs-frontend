import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chart from "../../../assets/svg/Chart.svg";

const Invest = () => {
  return (
    <div className="flex flex-wrap items-start justify-between p-10 md:mb-20 md:px-20">
      <div className="max-w-md mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Invest Smart</h2>
        <p className="mb-5 text-sm opacity-80">
          Get full statistic information about the behaviour of buyers and
          sellers will help you to make the decision.
        </p>
        <Link href="/" passHref>
          <a className="px-5 py-3 text-sm text-white rounded-full bg-lightBlue">
            Learn more
          </a>
        </Link>
      </div>
      <div>
        <Image src={Chart} alt="chart" />
      </div>
    </div>
  );
};

export default Invest;
