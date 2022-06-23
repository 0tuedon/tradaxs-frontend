import React from "react";
import DetailedStats from "./DetailedStats";
import GrowProfit from "./GrowProfit";
import Invest from "./Invest";

const index = () => {
  return (
    <section className="relative min-h-screen py-10 text-white bg-landingBlue md:py-20">
      <h1 className="max-w-2xl mx-auto mb-10 text-2xl font-semibold text-center md:text-3xl">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h1>
      <div className="w-full">
        <Invest />
        <DetailedStats />
        <GrowProfit />
      </div>
    </section>
  );
};

export default index;
