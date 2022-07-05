import React from "react";

const Second = ({ className, setFirst, setSecond, setThird }) => {
  const handlePrev = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };
  const handleNext = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };
  return (
    <div className={className}>
      <div className="px-3 pb-5 relative max-w-md">
        <h1 className="text-xs mb-5">Confirm Order Info</h1>
        <div className="flex justify-between flex-wrap items-center gap-3">
          <span>
            <h2 className="text-xs mb-2">Amount</h2>
            <h3 className="text-sm font-medium">
              ₦{new Intl.NumberFormat("en-US", {}).format(2000)}
            </h3>
          </span>
          <span>
            <h2 className="text-xs mb-2">Price</h2>
            <h3 className="text-sm font-medium">
              ₦{new Intl.NumberFormat("en-US", {}).format(134500.0)}
            </h3>
          </span>
          <span>
            <h2 className="text-xs mb-2">Quantity</h2>
            <h3 className="text-sm font-medium">0.01486988 USDT</h3>
          </span>
        </div>
      </div>
      <span className="text-xs space-y-1 mt-5 block">
        <p>Message: Seller released coin</p>
        <p>Order Confirmed</p>
      </span>
      <span className="text-sm text-accent font-semibold flex gap-3 mt-8">
        <button
          className="bg-white rounded-md py-2 px-5 opacity-50 transition-all duration-200 hover:opacity-100"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button className="bg-white rounded-md py-2 px-5" onClick={handleNext}>
          Next
        </button>
      </span>
    </div>
  );
};

export default Second;
