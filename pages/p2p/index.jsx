import React, { useState } from "react";
import History from "../../components/Dashboard/History";
import Table from "../../components/p2p/Table";
import Transactions from "../../components/Dashboard/Transactions";
import Trends from "../../components/Dashboard/Trends";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";
import { p2pTable } from "../../data/static/tableDatas";
import BuyModal from "../../components/p2p/BuyModal";
import Card from "../../components/p2p/Card";

const Index = () => {
  let cryptoCurrencies = ["USDT", "BTC", "BNB", "BUSDT", "ETH", "LTC"];
  const [isBuyingModalOpened, setModalOpened] = useState(false);
  const handleToggle = () => {
    setModalOpened(!isBuyingModalOpened);
  };
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="relative w-full overflow-auto max-w-screen">
          <BuyModal
            className={`fixed top-0 left-1/2 -translate-x-1/2 w-full h-screen z-50 max-w-[95%] ${
              isBuyingModalOpened ? "scale-100" : "scale-0"
            }`}
            state={isBuyingModalOpened}
            handleToggle={handleToggle}
          />
          <div className="md:max-w-screen md:min-w-fit rounded-lg bg-gradient-to-b from-landingBlue font-[700]">
            <div className="w-full max-w-full flex md:items-center justify-between md:gap-10 px-3 sm:px-5 py-3 border-b md:px-10 mb-[1.6rem]">
              <div className="flex flex-col md:flex-row md:items-center justify-start gap-3 md:gap-10">
                <div className="w-fit bg-[#D9D9D9] rounded-md text-xs p-1 md:p-2 flex justify-between items-center">
                  <button className="md:px-5 px-3 py-2 rounded-md bg-landingBlue">
                    Buy
                  </button>
                  <button className="md:px-5 px-3 py-2 text-black rounded-md">
                    Sell
                  </button>
                </div>
                <ul className="flex items-center justify-start gap-2 sm:gap-3">
                  {cryptoCurrencies.map((ct, i) => {
                    return (
                      <li key={i} className="group">
                        <button className="text-xs md:text-[0.94rem] md:font-semibold transition-all duration-200 decoration-2 hover:underline focus:underline group-first-of-type:underline">
                          {ct}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span className="w-fit inline-block mt-3 md:mt-0">
                <HeaderNav />
              </span>
            </div>
            <div className="md:min-w-fit whitespace-nowrap hidden md:block">
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
                handleToggle={handleToggle}
              />
            </div>
            <div className="px-3 space-y-3 sm:px-5 md:hidden max-w-full w-full">
              {p2pTable.map((data, i) => {
                return <Card key={i} data={data} handleToggle={handleToggle} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 space-y-5 md:space-y-0 mb-10 min-h-64 lg:flex-row md:space-x-10">
          <Trends />
          <History />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Index;
