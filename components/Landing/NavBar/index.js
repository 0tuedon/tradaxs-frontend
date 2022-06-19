import React, { useState } from "react";
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/icons/Logo";
import { PublicNavLink } from "../../../data/tradaxs";
import NavLinksCover from "../../Navbar/NavLinksCover";
import NavLink from "./NavLink";
const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const toggle = ()=>{
    setIsMenuActive(prev=>!prev)
  }
  return (
    <div className="md:px-[50px] 
    px-[10px]
    flex mt-2 items-center justify-between">
      {/* Left Side hero section*/}
      <div className="flex items-center gap-x-3">
        <Logo className={"w-[40px]"} />
        <h5 className="text-white text-[18px] font-semibold">TRADAXS</h5>
      </div>
      {/* Right side NavLinks  */}
      <div className="md:flex md:items-center hidden md:gap-x-[32px]">
        {PublicNavLink.map((data) => (
          <NavLink route={data.route} key={data.name}>
            {data.name}
          </NavLink>
        ))}

       
        <div className="">
          <Image
          width={"24px"}
          height={'4px'}
          src="/icons/divider.svg" alt="divider" />
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
      <NavLinksCover isMenuActive={isMenuActive} handle={toggle} />
       {/* Hamburger  */}
       <button className="md:hidden" onClick={toggle} >
          <AiOutlineMenu className="text-white w-7 h-7" />
        </button>
    </div>
  );
};

export default NavBar;
