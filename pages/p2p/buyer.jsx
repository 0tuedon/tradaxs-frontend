import React, { useState } from "react";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { BuyingProgress } from "../../components/p2p/Progress";
import ReplyCard from "../../components/Message/ReplyCard";
import First from "../../components/p2p/buyerSteps/First";
import Second from "../../components/p2p/buyerSteps/Second";
import Third from "../../components/p2p/buyerSteps/Third";

const Buyer = () => {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="w-full max-w-full flex justify-between flex-col lg:flex-row items-start gap-5">
          <div className="max-w-2xl w-full flex-auto">
            <div className="max-w-full overflow-auto">
              <BuyingProgress second={secondActive} third={thirdActive} />
            </div>
            <First
              setFirst={setFirstActive}
              setSecond={setSecondActive}
              setThird={setThirdActive}
              className={`mt-5 ${firstActive ? "block" : "hidden"}`}
            />
            <Second
              setFirst={setFirstActive}
              setSecond={setSecondActive}
              setThird={setThirdActive}
              className={`mt-5 ${secondActive ? "block" : "hidden"}`}
            />
            <Third className={`mt-5 ${thirdActive ? "block" : "hidden"}`} />
          </div>
          <div className="flex-auto max-w-sm w-full">
            <ReplyCard background="bg-[#EBEBEB] text-accent" />
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Buyer;
