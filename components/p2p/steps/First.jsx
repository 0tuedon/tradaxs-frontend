import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const First = ({ setFirst, setSecond, setThird, className }) => {
  let data = JSON.parse(localStorage.getItem("firstProcess"));

  let [price, setPrice] = useState(data?.price || 415.41);
  let [asset, setAsset] = useState(data?.asset || "usdt");
  let [cash, setCash] = useState(data?.cash || "usd");
  let [type, setType] = useState(data?.type || "fixed");
  let cryptoCurrencies = ["USDT", "BTC", "BNB", "BUSDT", "ETH", "LTC"];
  const handleAssets = (e) => {
    setAsset(e.target.value);
    let labels = document.querySelectorAll(".ct");
    labels.forEach((label) => {
      label.classList.remove("underline");
      label.classList.remove("group-first-of-type:underline");
    });

    let target = e.target.id;
    document
      .getElementById(target)
      .parentElement.parentElement.classList.add("underline");
  };

  const handleCash = (e) => {
    setCash(e.target.value);
    let labels = document.querySelectorAll(".cash");
    labels.forEach((label) => {
      label.classList.remove("underline");
      label.classList.remove("group-first-of-type:underline");
    });

    let target = e.target.id;
    document
      .getElementById(target)
      .parentElement.parentElement.classList.add("underline");
  };

  const handleType = (e) => {
    setType(e.target.value);
    let labels = document.querySelectorAll(".type");
    labels.forEach((label) => {
      label.classList.remove("underline");
      label.classList.remove("group-first-of-type:underline");
    });

    let target = e.target.id;
    document
      .getElementById(target)
      .parentElement.parentElement.classList.add("underline");
  };

  const increase = () => {
    setPrice((current) => current + 0.01);
  };

  const decrease = () => {
    setPrice((current) => current - 0.01);
  };

  const handle = (e) => {
    e.preventDefault();

    let data = { price, type, asset, cash };
    localStorage.setItem("firstProcess", JSON.stringify(data));
    setFirst(false);
    setSecond(true);
    setThird(false);
  };
  return (
    <div className={className}>
      <form onSubmit={handle}>
        <div className="mb-7">
          <div className="mb-5">
            <h4 className="mb-1 text-xs">Assets</h4>
            <div>
              <ul className="flex items-center justify-start gap-3">
                {cryptoCurrencies.map((ct, i) => {
                  return (
                    <li key={i} className="group">
                      <label
                        htmlFor={`crypto ${i}`}
                        className={`flex flex-col items-center gap-2 text-xs font-semibold transition-all duration-200 cursor-pointer ct hover:underline focus:underline ${
                          data?.asset
                            ? data?.asset === ct.toLowerCase() && "underline"
                            : "group-first-of-type:underline"
                        }`}
                      >
                        <span>{ct}</span>
                        <span className="relative w-4 h-4 bg-white rounded-full">
                          <input
                            type="radio"
                            name="crypto"
                            value={ct.toLowerCase()}
                            id={`crypto ${i}`}
                            className="absolute top-0 left-0 w-full h-full border-none outline-none"
                            onChange={handleAssets}
                            defaultChecked={
                              data?.asset
                                ? data?.asset === ct.toLowerCase() && true
                                : i === 0 && true
                            }
                          />
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mb-10">
            <h4 className="mb-1 text-xs">With Cash</h4>
            <div>
              <ul className="flex items-center justify-start gap-3">
                {["USD", "NGN"].map((ct, i) => {
                  return (
                    <li key={i} className="group">
                      <label
                        htmlFor={`cash ${i}`}
                        className={`flex flex-col items-center gap-2 text-xs font-semibold transition-all duration-200 cursor-pointer ct hover:underline focus:underline ${
                          data?.cash
                            ? data?.cash === ct.toLowerCase() && "underline"
                            : "group-first-of-type:underline"
                        }`}
                      >
                        <span>{ct}</span>
                        <span className="relative w-4 h-4 bg-white rounded-full">
                          <input
                            type="radio"
                            name="cash"
                            value={ct.toLowerCase()}
                            id={`cash ${i}`}
                            className="absolute top-0 left-0 w-full h-full border-none outline-none"
                            onChange={handleCash}
                            defaultChecked={
                              data?.cash
                                ? data?.cash === ct.toLowerCase() && true
                                : i === 0 && true
                            }
                          />
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-between max-w-xs mb-10 text-xs">
            <span>
              <h4 className="mb-2">Your Price</h4>
              <p>₦&nbsp;{new Intl.NumberFormat("en-US", {}).format(price)}</p>
            </span>
            <span>
              <h4 className="mb-2">Lowest Order Price</h4>
              <p>₦&nbsp;{new Intl.NumberFormat("en-US", {}).format(606.0)}</p>
            </span>
          </div>
          <div className="max-w-xs mb-10">
            <h4 className="mb-2 text-xs">Price Type</h4>
            <ul className="flex items-center justify-between gap-5 mb-5">
              {["Fixed", "Floating"].map((ct, i) => {
                return (
                  <li key={i} className="group">
                    <label
                      htmlFor={`price-type ${i}`}
                      className={`flex items-center gap-2 text-xs font-semibold transition-all duration-200 cursor-pointer ct hover:underline focus:underline ${
                        data?.type
                          ? data?.type === ct.toLowerCase() && "underline"
                          : "group-first-of-type:underline"
                      }`}
                    >
                      <span className="relative w-4 h-4 bg-white rounded-full">
                        <input
                          type="radio"
                          name="price type"
                          id={`price-type ${i}`}
                          value={ct.toLowerCase()}
                          className="absolute top-0 left-0 w-full h-full border-none outline-none"
                          onChange={handleType}
                          defaultChecked={
                            data?.type
                              ? data?.type === ct.toLowerCase() && true
                              : i === 0 && true
                          }
                        />
                      </span>
                      <span>{ct}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <span className="flex bg-[#D9D9D9] w-full justify-between items-center px-2 py-1">
              <AiOutlineMinus
                className="w-6 h-6 cursor-pointer text-accent"
                onClick={decrease}
              />
              <p className="text-xs font-medium text-black">
                {price.toFixed(2)}
              </p>
              <AiOutlinePlus
                className="w-6 h-6 cursor-pointer text-accent"
                onClick={increase}
              />
            </span>
          </div>
        </div>
        <div className="block max-w-xs mb-20 ml-auto mr-0 w-fit">
          <button
            className="px-5 py-2 text-xs font-medium bg-white rounded-md w-44 text-accent"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default First;
