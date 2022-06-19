import React from "react";

const StartMining = () => {
  return (
    <div
      className="flex 
     
    text-white
    bg-white justify-center
    px-[10px]
    items-center"
    >
      <div
        className="
        mt-[20px]
        mb-[88px]
        rounded-[10px]
        flex-col
        lg:flex-row
    lg:w-[1200px] 
    flex
    py-[30px]
    gap-y-[20px]
    px-[10px]
    bg-lightBlue
    md:h-[216px]
    md:rounded-[16px]
    justify-between
    lg:px-[48px]
    md:items-center

    "
      >
        {/*left on desktop width */}
        <div className="flex-col 
        gap-y-[16px]
        md:w-[400px]">
          <h5 className="text-[32px] mb-[16px] font-bold leading-[42px]">
            {" "}
            Start Mining
          </h5>
          <p className="inline-block text-[16px]">
            Join now with TRADAXS to get the latest news and start mining now
          </p>
        </div>
        <div>
          <form className="flex flex-col md:flex-row md:items-center">
            <div className=" mb-4 md:mb-0 md:w-[374px]">
              <input
                className="
                bg-transparent 
                border-b
                focus:border-b
                outline-none
                w-[90%]
                md:w-[100%]
                placeholder:text-white
                "
                placeholder="Enter your mail"
              />
            </div>
            <button className="w-[152px] 
            h-[58px]
            text-black bg-white 
            px-[14px] 
            rounded-[10px]
             md:rounded-[32px] 
             font-medium text-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartMining;
