/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AiOutlineMenu, AiFillBell } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import PropTypes from "prop-types";
import NotificationModal from "../Dashboard/NotificationModal";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBar = ({ title, handleToggle }) => {
  const [isNotificationOpened, setNotificationOpened] = useState(false);

  const router = useRouter();
  const [isMenuOpened, setMenuOpened] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpened(!isMenuOpened);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const handleClick = () => {
    setNotificationOpened(!isNotificationOpened);
  };
  return (
    <div className="flex items-start justify-between text-white">
      {/**content */}
      <h1 className="mb-1 text-base font-medium sm:text-2xl">Dashboard</h1>

      <div className="relative flex items-center justify-between space-x-2 xs:space-x-3 ">
        {/* <FiSearch className="w-5 h-5 transition-all duration-200 cursor-pointer opacity-70 hover:opacity-100" />
        <MdApps className="w-6 h-6 transition-all duration-200 cursor-pointer hover:opacity-100 opacity-70" /> */}
        {/**nofication */}
        <span
          className="flex items-center px-1 text-sm transition-all duration-200 rounded-full cursor-pointer notification hover:opacity-100 opacity-70"
          onClick={handleClick}
        >
          <AiFillBell className="w-4 h-4 cursor-pointer hover:opacity-100" />
          <span>0</span>
        </span>
        {isNotificationOpened && <NotificationModal />}
        {/**profile */}
        <span
          onClick={handleMenuToggle}
          className="flex items-center justify-between space-x-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:opacity-100 opacity-70"
        >
          <span className="relative w-6 h-6">
            <Image
              src="/eye-for-ebony-aZzXKGcyWqk-unsplash.jpg"
              alt="profile pic"
              layout="fill"
              priority
            />
          </span>
          <h4 className="hidden sm:inline-block">Otuedon</h4>
          <BiChevronDown className="w-4 h-4" />
        </span>
        <ul
          className={`absolute top-10 right-0 z-50 bg-white drop-shadow-sm px-5 py-3 text-sm text-black rounded-sm space-y-2 w-fit whitespace-nowrap transition-transform duration-200 ${
            isMenuOpened ? "scale-100" : "scale-0"
          }`}
        >
          <li className="transition-transform duration-200 hover:scale-110 focus:scale-110">
            <Link href="/profile" passHref>
              <a>Profile</a>
            </Link>
          </li>
          <li className="text-red-500 transition-transform duration-200 hover:scale-110 focus:scale-110">
            <button onClick={handleLogout}>Log out</button>
          </li>
        </ul>
        {/* Hamburger */}
        <button className="md:hidden" onClick={handleToggle}>
          <AiOutlineMenu className="w-6 h-6 text-white transition-transform duration-200 hover:scale-110" />
        </button>
      </div>
    </div>
  );
};

TopBar.propTypes = {};

export default TopBar;
