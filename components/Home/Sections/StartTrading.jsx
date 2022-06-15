import Link from "next/link";
import Bitcoin from "../../../assets/icons/Bitcoin";
import DownArrow from "../../../assets/icons/DownArrow";

const StartTrading = () => {
  return (
    <section className="min-h-[50vh] mb-16">
      <h1 className="text-2xl font-semibold text-center md:text-3xl text-accent">
        Start trading on tradaxs
      </h1>
      <div className="rounded-md shadow-md max-w-2xl mx-auto min-h-[30vh] px-5 mt-5 md:px-10 py-5">
        <div className="mb-8 space-y-5">
          <div>
            <span className="flex items-center justify-between">
              <h3 className="text-sm font-medium md:text-base">Buy</h3>
              <h3 className="text-sm text-accent md:text-base">Sell</h3>
            </span>
            <span className="w-full h-12 my-1 bg-gray-200 rounded-sm flex justify-between items-center px-3">
              <span className="flex justify-start items-center space-x-2">
                <Bitcoin className="h-8 w-8" />
                <h4 className="text-xs md:text-sm">Bitcoin</h4>
              </span>
              <DownArrow className="h-4 w-4" />
            </span>
            <p className="text-sm opacity-70">1 BTC=39,791.41 USD</p>
          </div>
          <div>
            <h3 className="text-sm font-medium md:text-base">Pay via</h3>
            <span className="w-full h-12 my-1 bg-gray-200 rounded-sm flex justify-between items-center px-3">
              <h4 className="text-xs md:text-sm">Select payment method</h4>
              <DownArrow className="h-4 w-4" />
            </span>
          </div>
        </div>
        <p className="mb-5 text-xs text-center md:text-sm">
          To use this feature, you need to create an account
        </p>
        <Link passHref href="/">
          <a className="block px-5 py-2 mx-auto text-sm text-white rounded-md w-fit bg-accent">
            Create account
          </a>
        </Link>
      </div>
    </section>
  );
};

export default StartTrading;
