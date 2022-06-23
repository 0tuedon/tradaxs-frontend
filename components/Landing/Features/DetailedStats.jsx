import Image from "next/image";
import Link from "next/link";
import Statistic from "../../../assets/svg/Statistic.svg";

const DetailedStats = () => {
  return (
    <div className="flex flex-col-reverse items-start justify-between p-10 md:space-x-3 md:flex-row md:py-10 md:pl-0 md:pr-20 md:mb-20">
      <div>
        <Image src={Statistic} alt="chart" />
      </div>
      <div className="max-w-md mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Detailed Statistics</h2>
        <p className="mb-5 text-sm opacity-80">
          View all mining related information in realtime, at any point at any
          location and decide which polls you want to mine in.
        </p>
        <Link href="/" passHref>
          <a className="px-5 py-3 text-sm text-white rounded-full bg-lightBlue">
            Learn more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DetailedStats;
