import React from "react";

const Progress = ({ second, third }) => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto mt-12 w-fit">
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

export default Progress;
