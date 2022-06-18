import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CirculatingSupply from "../../components/Dashboard/CirculatingSupply";
import FullyDiluted from "../../components/Dashboard/FullyDiluted";
import LimitCard from "../../components/Dashboard/LimitCard";
import MarketCap from "../../components/Dashboard/MarketCap";
import NewsCard from "../../components/Dashboard/NewsCard";
import Table from "../../components/Dashboard/Table";
import WalletBalance from "../../components/Dashboard/WalletBalance";
import AuthLayout from "../../components/Layouts/AuthLayout";

const Profile = () => {
  let activeTag = useRouter().asPath.split("#")[1] || "portfolio";
  let [tag, setTag] = useState(activeTag);

  const tabLinks = [
    "portfolio",
    "watchlist",
    "gainers",
    "losers",
    "recommended",
    "recently sold",
  ];
  return (
    <AuthLayout>
      <section className="w-full">
        <div className="p-5">
          <div className="mb-5 flex justify-between items-center flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 w-full">
            <div className="w-full md:w-fit">
              <WalletBalance />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,500px))] sm:grid-cols-[repeat(auto-fit,minmax(150px,280px))] gap-5 max-w-full min-h-36">
              <MarketCap />
              <CirculatingSupply />
              <FullyDiluted />
            </div>
          </div>
          {/*table and side */}
          <div className="flex justif-between item-center flex-col md:flex-row md:space-x-5">
            <div className="w-full ">
              <ul className="space-x-5 whitespace-nowrap mb-3">
                {tabLinks.map((link, i) => {
                  return (
                    <li key={i} className="inline-block">
                      <Link href={`#${link}`} passHref>
                        <a className="text-xs text-gray-400 capitalize hover:text-accent font-medium">
                          {link}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="">
                <Table />
              </div>
            </div>
            <div className="max-w-xs">
              <LimitCard />
              <div className="mt-3">
                <h3 className="font-medium text-sm opacity-70 mb-2">News</h3>
                <NewsCard />
                <Link href="/" passHref>
                  <a className="text-xs opacity-70 transition-all duration-200 hover:underline mt-3 w-fit block mr-0 ml-auto">
                    Show all news
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;
