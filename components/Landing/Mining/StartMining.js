import React from "react";

const StartMining = () => {
  return (
    <div
      className="flex 
     
    text-white
    bg-white justify-center items-center"
    >
      <div
        className="
        mt-[20px]
        mb-[88px]
    w-[1200px] 
    flex
    bg-lightBlue
    h-[216px]
    rounded-[16px]
    justify-between
    px-[48px]
    items-center

    "
      >
        {/*left on desktop width */}
        <div className="flex-col 
        gap-y-[16px]
        w-[400px]">
          <h5 className="text-[32px] mb-[16px] font-bold leading-[42px]">
            {" "}
            Start Mining
          </h5>
          <p className="inline-block text-[16px]">
            Join now with TRADAXS to get the latest news and start mining now
          </p>
        </div>
        <div>
          <form className="flex items-center">
            <div className="w-[374px]">
              <input
                className="
                bg-transparent 
                border-b
                focus:border-b
                outline-none
                w-[100%]
                placeholder:text-white
                "
                placeholder="Enter your mail"
              />
            </div>
            <button className="w-[152px] 
            h-[58px]
            text-black bg-white 
            px-[14px] 
             rounded-[32px] font-medium text-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartMining;
