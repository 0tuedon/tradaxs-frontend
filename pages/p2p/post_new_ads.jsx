import React, { useState } from "react";
import Transactions from "../../components/p2p/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import HeaderNav from "../../components/p2p/HeaderNav";
import Progress from "../../components/p2p/Progress";
import First from "../../components/p2p/steps/First";
import Second from "../../components/p2p/steps/Second";
import Third from "../../components/p2p/steps/Third";

const Index = () => {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);

  return (
    <AuthLayout>
      <section className="w-full pt-4 text-white">
        <Transactions />
        <div className="w-full max-w-full rounded-lg">
          <div className="flex items-center justify-between px-5 py-3 border-b md:px-10 ">
            <h1 className="text-base font-medium">Post Normal Ad</h1>
            <HeaderNav />
          </div>
          <div className="w-full max-w-full">
            <div className="max-w-full overflow-auto">
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
