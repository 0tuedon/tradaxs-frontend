import React from "react";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";
import Table from "../../components/p2p/Table";
import { adsTable } from "../../data/static/tableDatas";

const ads = () => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="w-full overflow-auto max-w-screen">
          <div className="max-w-screen min-w-fit rounded-lg bg-gradient-to-b from-landingBlue font-[700]">
            <div className="min-w-fit flex items-center justify-between gap-10 px-5 py-3 border-b md:px-10 mb-[1.6rem]">
              <h1 className="text-base font-medium">Ads Posts</h1>
              <HeaderNav />
            </div>
            <div className="min-w-fit min-h-[24rem] whitespace-nowrap">
              <Table
                type="ads"
                header={[
                  "advertisers",
                  "price(lowest to highest)",
                  "limit/available",
                  "payment",
                  "action",
                ]}
                data={adsTable}
              />
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ads;
