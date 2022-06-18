import React from "react";
import Logo from "../../../assets/icons/Logo";
import { PublicNavLink } from "../../../data/tradaxs";
import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <div className="px-[50px] flex mt-2 items-center justify-between">
      {/* Left Side hero section*/}
      <div className="flex items-center gap-x-3">
        <Logo className={"w-[40px]"} />
        <h5 className="text-white text-[18px] font-semibold">TRADAXS</h5>
      </div>
      {/* Right side NavLinks  */}
      <div className="flex items-center gap-x-[32px]">
        {PublicNavLink.map((data) => (
          <NavLink route={data.route} key={data.name}>
            {data.name}
          </NavLink>
        ))}
        <div className="">
          <img src="/icons/divider.svg" alt="divider" />
        </div>
        <NavLink
          route={"/register"}
          style={`rounded-[32px]
                bg-btnAccent
                w-[120px]
                h-[48px]
                flex
                justify-center
                items-center
                h-[48px]
                `}
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;