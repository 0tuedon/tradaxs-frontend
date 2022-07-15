import React, { useState } from "react";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";
import { Progress } from "../../components/p2p/Progress";

import dynamic from "next/dynamic";

const First = dynamic(() => import("../../components/p2p/steps/First"), {
  ssr: false,
});

const Second = dynamic(() => import("../../components/p2p/steps/Second"), {
  ssr: false,
});

const Third = dynamic(() => import("../../components/p2p/steps/Third"), {
  ssr: false,
});

const Index = () => {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);

  return (
    <AuthLayout>
      <section className="w-full text-white md:pt-4">
        <Transactions />
        <div className="w-full max-w-full rounded-lg">
          <div className="flex items-center justify-between px-5 py-3 border-b md:px-10 ">
            <h1 className="text-base font-medium">Post Normal Ad</h1>
            <HeaderNav />
          </div>
          <div className="w-full max-w-full">
            <div className="max-w-full overflow-auto mt-2">
              <Progress second={secondActive} third={thirdActive} />
            </div>
            <div className="mt-8 mb-20">
              <First
                setFirst={setFirstActive}
                setSecond={setSecondActive}
                setThird={setThirdActive}
                className={`max-w-2xl mx-auto ${
                  firstActive ? "block" : "hidden"
                }`}
              />
              <Second
                setFirst={setFirstActive}
                setSecond={setSecondActive}
                setThird={setThirdActive}
                className={`max-w-2xl mx-auto ${
                  secondActive ? "block" : "hidden"
                }`}
              />
              <Third
                setFirst={setFirstActive}
                setSecond={setSecondActive}
                setThird={setThirdActive}
                third={thirdActive}
                className={`max-w-2xl mx-auto ${
                  thirdActive ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Index;
