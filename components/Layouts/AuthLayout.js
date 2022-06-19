import { data } from "autoprefixer";
import React from "react";
import { NavigationLinks } from "../../data/tradaxs";
import NavLink from "./NavLink";
import TopBar from "./TopBar";

export const SideBar = () => {
  return (
    <div
      className="bg-accent
        w-[240px]
        h-full
        py-[50px]
        rounded-r-[10px]
        hidden
        md:flex
        md:flex-col
        gap-y-[10px]"
    >
      {/* Nav Links */}
      {NavigationLinks.map((data) => (
        <NavLink data={data} key={data.name}>
          {data.name}
        </NavLink>
      ))}
    </div>
  );
};

export const Navbar = ({ title }) => {
  return (
    <div className="sticky top-0 bg-white md:px-[40px] w-[100%] min-h-[60px] flex z-50 drop-shadow-sm">
      <TopBar title={title} />
    </div>
  );
};

const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex w-full max-w-full h-screen max-h-screen bg-dashboardGray">
      <SideBar />
      <div className="w-full h-full overflow-auto">
        <Navbar title={title} />
        <hr />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
