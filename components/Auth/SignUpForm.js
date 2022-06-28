import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <form className="">
        {/* Two for one role on desktop */}
        <div className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between ">
          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

                Full Name
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="Full Name"
            />
          </div>
          {/* email */}

          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

                Email
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]

            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="Email"
            />
          </div>
        </div>

          {/* Two for one role on desktop */}
          <div className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between ">
          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

                Username
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="username"
            />
          </div>
          {/* email */}

          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

                BVN
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]

            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="BVN"
            />
          </div>
        </div>
          {/* Two for one role on desktop */}
          <div className="md:flex md:flex-row
            flex flex-col
         md:mb-[49px]
         mb-[10px]
        justify-between ">
          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

                Contact Number
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="Contact Number"
            />
          </div>
          {/* email */}

          <div className="flex 
          mb-[10px] md:mb-[0px]
          flex-col">
            <label>

            Password
            </label>
            <input
            className="border border-borderShade 
            h-[50px]
            md:w-[217px]
            w-4/4
            px-[10px]
            rounded-[9px]
            text-gray2
            focus:outline-buttonBlue"
            placeholder="Password"
            />
          </div>
        </div>
        <div className="flex mt-[60px] 
        
        md:justify-end">
        <button className="
        w-[213px]
        
        h-[54px]
        rounded-[10px]
        text-white
        bg-buttonBlue">
            Sign up
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default SignUpForm;
