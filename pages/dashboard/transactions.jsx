import React from "react";
import TransactionCard from "../../components/Dashboard/TransactionCard";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Table from "../../components/p2p/Table";
import { transactionHistory } from "../../data/static/tableDatas";

const transactions = () => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="w-full overflow-auto max-w-screen">
          <div className="max-w-screen min-w-fit rounded-lg bg-gradient-to-b from-landingBlue font-[700]">
            <div className="min-w-fit px-3 sm:px-5 py-3 border-b md:px-10 mb-[1.6rem]">
              <h1 className="text-sm md:text-base font-semibold">
                Transaction History
              </h1>
            </div>
            <div className="min-w-fit min-h-[24rem] whitespace-nowrap font-medium hidden md:block">
              <Table
                type="transactions"
                header={[
                  "coin",
                  "to address",
                  "from address",
                  "payment",
                  "amount",
                ]}
                data={transactionHistory}
              />
            </div>
            <div className="px-3 space-y-3 sm:px-5 md:hidden">
              {transactionHistory.map((data, i) => {
                return <TransactionCard key={i} data={data} />;
              })}
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default transactions;
