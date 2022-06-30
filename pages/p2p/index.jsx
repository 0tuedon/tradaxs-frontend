import React, { useState } from "react";
import History from "../../components/Dashboard/History";
import Table from "../../components/p2p/Table";
import Transactions from "../../components/p2p/Transactions";
import Trends from "../../components/Dashboard/Trends";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";

const Index = () => {
  let cryptoCurrencies = ["USDT", "BTC", "BNB", "BUSDT", "ETH", "LTC"];
  return (
    <AuthLayout>
      <section className="w-full pt-4 text-white">
        <Transactions />
        <div className="w-full max-w-full rounded-lg bg-gradient-to-b from-landingBlue">
          <div className="flex items-center justify-between px-5 py-3 border-b md:px-10 ">
            <div className="flex items-center justify-start gap-10">
              <div className="w-fit bg-[#D9D9D9] rounded-md p-1 flex justify-between items-center">
                <button className="px-3 py-2 text-sm rounded-md bg-landingBlue">
                  Buy
                </button>
                <button className="px-3 py-2 text-sm text-black rounded-md">
                  Sell
                </button>
              </div>
              <ul className="flex justify-start items-center gap-3">
                {cryptoCurrencies.map((ct, i) => {
                  return (
                    <li key={i} className="group">
                      <button className="font-semibold hover:underline focus:underline transition-all duration-200 group-first-of-type:underline">
                        {ct}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <HeaderNav />
          </div>
          <div className="w-full max-w-full">
            <Table />
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10 min-h-64 lg:flex-row md:space-x-10">
          <Trends />
          <History />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Index;
