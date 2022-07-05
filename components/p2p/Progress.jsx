import React from "react";

export const Progress = ({ second, third }) => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto gap-y-2 lg:mt-12 w-fit">
      <span className="relative flex-auto text-xs w-72">
        <span className="lg:absolute lg:-left-8 lg:-top-6 w-fit">
          <h3 className="text-center">Set Type &amp; Price</h3>
        </span>
        <fieldset
          className={`w-full border-t-2 ${
            (second || third) && "border-accent"
          }`}
        >
          <legend className="grid w-6 h-6 text-sm text-white rounded-full bg-accent place-items-center">
            1
          </legend>
        </fieldset>
      </span>
      <span className="relative flex-auto text-xs w-72">
        <span className="lg:absolute lg:-left-24 lg:-top-6 w-fit">
          <h3 className="text-center">Set Total Amount &amp; Payment Method</h3>
        </span>
        <fieldset className={`w-full border-t-2 ${third && "border-accent"}`}>
          <legend
            className={`grid w-6 h-6 text-sm rounded-full place-items-center ${
              second || third ? "bg-accent text-white" : "bg-white text-accent"
            }`}
          >
            2
          </legend>
        </fieldset>
      </span>
      <span className="relative flex-auto text-xs w-fit">
        <span className="lg:absolute lg:-left-24 lg:-top-6 w-72">
          <h3 className="text-center">Set Remarks &amp; Automatic Response</h3>
        </span>
        <fieldset className={`w-full border-t-2 ${third && "border-accent"}`}>
          <legend
            className={`grid w-6 h-6 text-sm rounded-full place-items-center ${
              third ? "bg-accent text-white" : "bg-white text-accent"
            }`}
          >
            3
          </legend>
        </fieldset>
      </span>
    </div>
  );
};

export const BuyingProgress = ({ second, third }) => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:mt-12 gap-y-2 max-w-full w-full">
      <span className="relative flex-auto text-xs w-fit lg:w-32">
        <span className="lg:absolute lg:left-0 lg:-top-6 w-fit">
          <h3 className="text-center whitespace-nowrap">
            Trasfer Payment to Seller
          </h3>
        </span>
        <fieldset
          className={`w-full border-t-2 ${
            (second || third) && "border-accent"
          }`}
        >
          <legend className="grid w-6 h-6 text-sm text-white rounded-full bg-accent place-items-center">
            1
          </legend>
        </fieldset>
      </span>
      <span className="relative flex-auto text-xs w-fit lg:w-36">
        <span className="lg:absolute lg:left-0 lg:-top-6 w-fit">
          <h3 className="text-center whitespace-nowrap">
            Pending Seller to Realese Crypto
          </h3>
        </span>
        <fieldset className={`w-full border-t-2 ${third && "border-accent"}`}>
          <legend
            className={`grid w-6 h-6 text-sm rounded-full place-items-center ${
              second || third ? "bg-accent text-white" : "bg-white text-accent"
            }`}
          >
            2
          </legend>
        </fieldset>
      </span>
      <span className="relative flex-auto text-xs w-fit lg:w-0">
        <span className="lg:absolute lg:left-0 lg:-top-6 w-fit">
          <h3 className="text-center whitespace-nowrap">Completed</h3>
        </span>
        <fieldset
          className={`w-full border-t-2 lg:border-none lg:w-auto ${
            third && "border-accent"
          }`}
        >
          <legend
            className={`grid w-6 h-6 text-sm rounded-full place-items-center ${
              third ? "bg-accent text-white" : "bg-white text-accent"
            }`}
          >
            3
          </legend>
        </fieldset>
      </span>
    </div>
  );
};
