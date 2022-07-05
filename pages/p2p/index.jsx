import React, { useState } from "react";
import History from "../../components/Dashboard/History";
import Table from "../../components/p2p/Table";
import Transactions from "../../components/Dashboard/Transactions";
import Trends from "../../components/Dashboard/Trends";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";
import { p2pTable } from "../../data/static/tableDatas";
import BuyModal from "../../components/p2p/BuyModal";

const Index = () => {
  let cryptoCurrencies = ["USDT", "BTC", "BNB", "BUSDT", "ETH", "LTC"];
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="relative w-full overflow-auto max-w-screen">
          {/* <BuyModal /> */}
          <div className="max-w-screen min-w-fit rounded-lg bg-gradient-to-b from-landingBlue font-[700]">
            <div className="min-w-fit flex items-center justify-between gap-10 px-5 py-3 border-b md:px-10 mb-[1.6rem]">
              <div className="flex items-center justify-start gap-10">
                <div className="w-fit bg-[#D9D9D9] rounded-md text-xs p-2 flex justify-between items-center">
                  <button className="px-5 py-2 rounded-md bg-landingBlue">
                    Buy
                  </button>
                  <button className="px-5 py-2 text-black rounded-md">
                    Sell
                  </button>
                </div>
                <ul className="flex items-center justify-start gap-3">
                  {cryptoCurrencies.map((ct, i) => {
                    return (
                      <li key={i} className="group">
                        <button className="text-[0.94rem] font-semibold transition-all duration-200 hover:underline focus:underline group-first-of-type:underline">
                          {ct}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <HeaderNav />
            </div>
            <div className="min-w-fit whitespace-nowrap">
              <Table
                type="p2p"
                header={[
                  "advertisers",
                  "price(lowest to highest)",
                  "limit/available",
                  "payment",
                  "trade",
                ]}
                data={p2pTable}
              />
            </div>
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
