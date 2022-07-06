import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BuyModal = ({ className, handleToggle }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/p2p/buyer");
  };

  return mounted
    ? createPortal(
        <div className={className}>
          <div className="bg-landingBlue text-white w-full gap-5 max-w-4xl px-4 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-md py-5 lg:border-r-2 lg:pr-5 h-full lg:border-white">
              <h1 className="font-bold text-sm mb-3">Rolex</h1>
              <div className="flex justify-between items-center font-normal text-sm mb-3">
                <p>
                  Price:&nbsp;
                  <span className="font-semibold">620 NGN</span>
                </p>
                <p>
                  Available:&nbsp;
                  <span className="font-semibold">0.08 USDT</span>
                </p>
              </div>
              <div className="flex justify-between items-center font-normal text-sm mb-10">
                <p>
                  Payment Time Limit:&nbsp;
                  <span className="font-semibold">15 Minutes</span>
                </p>
                <p>
                  Seller&apos;s payment method:&nbsp;
                  <span className="font-semibold">Bank Transfer</span>
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold mb-1">
                  Terms and conditions
                </h2>
                <p className="text-sm">
                  Fast payment; fast release. I&apos;m active, don&apos;t
                  include “bitcoin” or anything related to cryptocurrency in
                  your payment description. Because of our Banks 👏🏽👏🏽 fast trade
                </p>
              </div>
            </div>
            <form
              className="flex-auto py-5 text-sm w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="pay" className="block mb-3">
                I want to pay
                <span className="flex justify-between items-center bg-white mt-2 text-black px-2">
                  <input
                    type="number"
                    name="pay"
                    id="pay"
                    className="flex-auto py-2 bg-transparent outline-none"
                    required
                  />
                  <span>NGN</span>
                </span>
              </label>
              <label htmlFor="receive" className="block mb-10">
                I will receive
                <span className="flex justify-between items-center bg-white mt-2 text-black px-2 opacity-50">
                  <input
                    type="number"
                    name="receive"
                    id="receive"
                    className="flex-auto py-2 bg-transparent outline-none"
                  />
                  <span>USDT</span>
                </span>
              </label>
              <span className="text-xs text-accent font-semibold flex gap-3">
                <button
                  type="button"
                  className="bg-white rounded-md py-2 px-4 lg:px-10 opacity-50 transition-all duration-200 hover:opacity-100"
                  onClick={handleToggle}
                >
                  Cancel
                </button>
                <button
                  className="bg-white rounded-md py-2 px-4 lg:px-10"
                  type="submit"
                >
                  Buy USDT
                </button>
              </span>
            </form>
          </div>
        </div>,
        document.getElementById("__next")
      )
    : null;
};

export default BuyModal;
