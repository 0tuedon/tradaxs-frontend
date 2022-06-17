import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const NavLink = ({ children, data }) => {
  // using useRouter
  const Router = useRouter();
  // states for NavLink
  const [hovering, setHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const changeImagetoActive = () => {
    setHovering((prev) => !prev);
  };
  // if active
  useEffect(() => {
    if (Router.pathname.includes(data.route)) {
      setIsActive(true);
    }
  }, [Router.pathname, data.route, hovering]);

  return (
    <div
      className={`flex items-center 
    gap-x-[15px] 
    cursor-pointer
    text-[16px]
    hover:bg-white
   ${isActive ? "bg-white text-accent" : "text-white"}
    hover:text-accent
    px-[30px]
    h-[42px]
    duration-700
    transition
    ease-in-out
       
    `}
      onMouseOver={changeImagetoActive}
      onMouseOut={changeImagetoActive}
    >
      <Image
        width={"30px"}
        height={"33px"}
        src={hovering || isActive ? data.activeLogo : data.logo}
        alt={data.name}
      />

      <p>{children}</p>
    </div>
  );
};

export default NavLink;
