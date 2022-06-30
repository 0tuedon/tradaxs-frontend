import React from "react";

const Second = ({ setFirst, setSecond, setThird, className }) => {
  const handleMethod = (e) => {
    let labels = document.querySelectorAll(".method");
    labels.forEach((label) => {
      label.classList.remove("underline");
      label.classList.remove("group-first-of-type:underline");
    });

    let target = e.target.id;
    document
      .getElementById(target)
      .parentElement.parentElement.classList.add("underline");
  };
  const handle = (e) => {
    e.preventDefault();
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  const handlePrev = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };
  return (
    <div className={className}>
      <form onSubmit={handle}>
        <div className="max-w-sm mb-7">
          <label htmlFor="amount" className="block mb-10">
            <h4 className="mb-1 text-xs">Total Amount</h4>
            <span className="flex items-center justify-center px-2 text-black bg-white rounded-sm">
              <input
                type="number"
                name="amount"
                id="amount"
                className="flex-auto py-1 bg-transparent outline-none"
                placeholder="0"
                required
              />
              <span className="text-xs font-medium">USDT</span>
            </span>
            <p className="flex items-center justify-between mt-1 text-xs">
              <span>Available: 500 USDT</span>
              <span>≈ 0 NGN</span>
            </p>
          </label>
          <div className="mb-10">
            <h4 className="mb-1 text-xs">Order Limit</h4>
            <div className="flex items-center justify-between max-w-full gap-5">
              <label htmlFor="min">
                <span className="flex items-center justify-center flex-auto px-2 text-black bg-white rounded-sm">
                  <input
                    type="number"
                    name="min"
                    id="min"
                    className="w-full py-1 bg-transparent outline-none"
                    defaultValue={500}
                  />
                  <span className="text-xs font-medium">NGN</span>
                </span>
              </label>
              <span className="text-base font-medium">~</span>
              <label htmlFor="max">
                <span className="flex items-center justify-center flex-auto px-2 text-black bg-white rounded-sm">
                  <input
                    type="number"
                    name="max"
                    id="max"
                    className="w-full py-1 bg-transparent outline-none"
                    defaultValue={700}
                  />
                  <span className="text-xs font-medium">NGN</span>
                </span>
              </label>
            </div>
          </div>
          <div className="max-w-xs mb-10">
            <h4 className="mb-2 text-xs">Payment Method</h4>
            <ul className="flex items-center justify-between gap-5 mb-5">
              {["Bank Transfer", "Tradax Payment"].map((ct, i) => {
                return (
                  <li key={i} className="group">
                    <label
                      htmlFor={`method ${i}`}
                      className="flex items-center gap-2 text-xs font-semibold transition-all duration-200 cursor-pointer method hover:underline focus:underline group-first-of-type:underline"
                    >
                      <span className="relative w-4 h-4 bg-white rounded-full">
                        <input
                          type="radio"
                          name="method"
                          id={`method ${i}`}
                          className="absolute top-0 left-0 w-full h-full border-none outline-none"
                          onChange={handleMethod}
                          defaultChecked={i === 0 && true}
                        />
                      </span>
                      <span>{ct}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <label htmlFor="time" className="block">
            <h4 className="mb-2 text-xs">Payment Time Limit</h4>
            <select
              name="time"
              id="time"
              className="w-48 px-2 py-1 text-xs text-black rounded-sm outline-none"
            >
              <option value="15">15 mins</option>
              <option value="20">20 mins</option>
            </select>
          </label>
        </div>
        <div className="flex items-center justify-between max-w-xs gap-5 mb-20 ml-auto mr-0">
          <button
            onClick={handlePrev}
            type="button"
            className="flex-auto px-5 py-2 text-xs font-medium bg-[#BAB5B5] hover:bg-white transition-all duration-200 rounded-md text-accent"
          >
            Previous
          </button>
          <button
            className="flex-auto px-5 py-2 text-xs font-medium bg-white rounded-md text-accent"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Second;