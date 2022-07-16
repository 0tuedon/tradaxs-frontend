import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BuyModal = ({ className, handleToggle, state }) => {
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
        <>
          {state && (
            <div className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"></div>
          )}
          <div className={className}>
            <div className="bg-landingBlue text-white w-full pb-8 max-w-md px-4 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <form
                className="flex-auto py-5 text-sm w-full"
                onSubmit={handleSubmit}
              >
                <h1 className="font-bold text-sm md:text-base mb-3">Rolex</h1>
                <div className="flex justify-between items-center font-normal text-xs md:text-sm mb-3">
                  <p>
                    Price:&nbsp;
                    <span className="font-semibold">620 NGN</span>
                  </p>
                  <p>
                    Available:&nbsp;
                    <span className="font-semibold">0.08 USDT</span>
                  </p>
                </div>
                <div className="flex justify-between flex-col xs:flex-row gap-2 xs:items-center font-normal text-xs mb-5 opacity-70">
                  <p>
                    Payment Time Limit:&nbsp;
                    <span className="font-semibold">15 Minutes</span>
                  </p>
                  <p>
                    Seller&apos;s payment method:&nbsp;
                    <span className="font-semibold">Bank Transfer</span>
                  </p>
                </div>
                <label
                  htmlFor="pay"
                  className="block mb-3 text-xs md:text-sm font-medium"
                >
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
                <label
                  htmlFor="receive"
                  className="block mb-8 text-xs md:text-sm font-medium"
                >
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
                    className="bg-white rounded-md py-2 px-5"
                    type="submit"
                  >
                    Buy USDT
                  </button>
                  <button
                    type="button"
                    className="bg-white rounded-md py-2 px-5 opacity-50 transition-all duration-200 hover:opacity-100"
                    onClick={handleToggle}
                  >
                    Cancel
                  </button>
                </span>
              </form>
              <div className="max-w-md py-3 border-t md:pr-5 h-full lg:border-white">
                <div>
                  <h2 className="text-sm font-semibold mb-1">
                    Terms and conditions
                  </h2>
                  <p className="text-xs">
                    Fast payment; fast release. I&apos;m active, don&apos;t
                    include “bitcoin” or anything related to cryptocurrency in
                    your payment description. Because of our Banks 👏🏽👏🏽 fast
                    trade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("__next")
      )
    : null;
};

export default BuyModal;
