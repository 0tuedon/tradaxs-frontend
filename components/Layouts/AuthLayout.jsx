import React, { useState } from "react";
import { NavigationLinks } from "../../data/tradaxs";
import NavLink from "./NavLink";
import TopBar from "./TopBar";
import Logo from "../../assets/icons/Logo";

export const SideBar = ({ active }) => {
  return (
    <div
      className={`md:sidebar
      w-[250px]
        sm:w-[320px]
        bg-[rgba(27,25,66)]
        h-full
        py-[50px]
        fixed 
        top-0 left-0
        z-50
        md:relative
        md:flex
        md:flex-col
        transition-all duration-200
        space-y-5 ${active ? "block" : "hidden"}`}
    >
      <span className="flex items-center justify-start pl-5 mb-10 space-x-3 text-xl font-bold text-white">
        <Logo className="w-6 h-6" />
        <span>Tradaxs</span>
      </span>
      {/* Nav Links */}
      {NavigationLinks.map((data) => {
        let { Icon } = data;
        return (
          <NavLink
            href={data.route}
            key={data.name}
            className="relative flex items-center justify-start pl-5 space-x-4 text-sm text-gray-400 transition-all duration-200 hover:text-dashboardLink"
          >
            <Icon className="w-4 h-4" />
            <span>{data.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export const Navbar = ({ title, handleToggle }) => {
  return (
    <div className="w-full mb-5 min-h-fit">
      <TopBar title={title} handleToggle={handleToggle} />
    </div>
  );
};

const AuthLayout = ({ children, title }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleToggle = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <div className="relative flex w-full h-screen max-w-full max-h-screen dashboard">
      <SideBar active={isMenuActive} />
      <div className="w-full h-full px-5 pt-5 overflow-auto">
        <Navbar title={title} handleToggle={handleToggle} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
