import React from "react";

const Third = ({ className }) => {
  const handle = () => {};
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
      <span className="text-xs my-5 block">
        <p>Message: Your USDT wallet has be credited with 0.01486988</p>
      </span>
      <div>
        <h1 className="text-xs mb-1">Order Completed</h1>
        <div className="bg-landingBlue max-w-[15rem] h-auto rounded-md px-3 py-5 space-y-5">
          <span className="text-sm block">
            <h1 className="font-semibold">Referrence No</h1>
            <h2>TRRF203762731</h2>
          </span>
          <span className="text-sm flex justify-between items-center">
            <span className="text-sm block">
              <h1 className="font-semibold">Amount</h1>
              <h2>₦{new Intl.NumberFormat("en-US", {}).format(2000.0)}</h2>
            </span>
            <span className="text-sm block">
              <h2>0.01486988 USDT</h2>
            </span>
          </span>
          <span className="text-sm block">
            <h1 className="font-medium">Method</h1>
            <h2>Bank Transfer</h2>
          </span>
          <span className="text-sm block">
            <h1 className="font-semibold">Status</h1>
            <h2>Completed</h2>
          </span>
        </div>
      </div>
      <span className="text-sm text-accent font-semibold flex gap-3 my-10">
        <button className="bg-white rounded-md py-2 px-5" onClick={handle}>
          Print Receipt
        </button>
      </span>
    </div>
  );
};

export default Third;
