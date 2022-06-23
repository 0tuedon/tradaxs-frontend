import Image from "next/image";
import Link from "next/link";
import Table from "../../../assets/svg/Table.svg";

const GrowProfit = () => {
  return (
    <div className="flex flex-col items-start justify-between p-10 md:flex-row md:px-20">
      <div className="max-w-md mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Grow your profit and track your investments
        </h2>
        <p className="mb-5 text-sm opacity-80">
          Use advanced analytical tools. Clear TradingView charts let you track
          current and historical profit investments.
        </p>
        <Link href="/" passHref>
          <a className="px-5 py-3 text-sm text-white rounded-full bg-lightBlue">
            Learn more
          </a>
        </Link>
      </div>
      <div>
        <Image src={Table} alt="table" />
      </div>
    </div>
  );
};

export default GrowProfit;
