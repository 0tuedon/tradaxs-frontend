import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";

const Third = ({ setFirst, setSecond, setThird, third, className }) => {
  let data = JSON.parse(localStorage.getItem("thirdProcess"));
  let [region, setRegion] = useState(data?.region || "");
  const handle = (e) => {
    e.preventDefault();
    let data = { region };
    localStorage.setItem("thirdProcess", JSON.stringify(data));
  };

  const handlePrev = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  return (
    <div className={className}>
      <form className="mb-5" onSubmit={handle}>
        <label htmlFor="remark" className="block mb-8">
          <h4 className="mb-[0.125rem] text-xs">Remarks (Optional)</h4>
          <textarea
            name="remark"
            id="remark"
            cols="30"
            rows="4"
            className="w-full p-2 text-xs text-black rounded-sm outline-none"
          ></textarea>
        </label>
        <label htmlFor="reply" className="block mb-8">
          <h4 className="mb-[0.125rem] text-xs">Auto Reply (Optional)</h4>
          <textarea
            name="reply"
            id="reply"
            cols="30"
            rows="4"
            className="w-full p-2 text-xs text-black rounded-sm outline-none"
          ></textarea>
        </label>
        <label htmlFor="region" className="block mb-8">
          <h4 className="mb-[0.3rem] text-xs">Select Region(s) Availability</h4>
          <select
            name="region"
            id="region"
            className="w-48 px-2 py-1 text-xs text-black rounded-sm outline-none"
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="all">All Region</option>
            <option value="lagos">Lagos</option>
          </select>
        </label>
        <div className="mb-7">
          <h4 className="mb-[0.3rem] text-xs">Counterparty Conditions</h4>
          <div className="text-xs space-y-[4px]">
            <label
              htmlFor="completed"
              className="flex items-center justify-start gap-1"
            >
              <input
                type="checkbox"
                name="completed"
                id="completed"
                required={third}
              />
              Completed KYC
            </label>
            <label
              htmlFor="registered"
              className="flex items-center justify-start gap-1"
            >
              <input
                type="checkbox"
                name="registered"
                id="registered"
                required={third}
              />
              Registered above 10 days ago
            </label>
            <label
              htmlFor="holding"
              className="flex items-center justify-start gap-1"
            >
              <input
                type="checkbox"
                name="holding"
                id="holding"
                required={third}
              />
              Holdings more than 0.005 BTC
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between max-w-xs gap-5 mb-20 ml-auto mr-0">
          <button
            onClick={handlePrev}
            className="flex-auto px-5 py-2 text-xs font-medium bg-[#BAB5B5] hover:bg-white transition-all duration-200 rounded-md text-accent"
          >
            Previous
          </button>
          <button
            className="flex-auto px-5 py-2 text-xs font-medium bg-white rounded-md text-accent"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Third;
