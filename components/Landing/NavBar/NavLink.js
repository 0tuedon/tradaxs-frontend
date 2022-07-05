import Link from "next/link";
import React from "react";

const NavLink = ({ children, style, route }) => {
  return (
    <Link href={route} passHref>
      <a className={`${style} text-white text-sm`}>{children}</a>
    </Link>
  );
};

export default NavLink;
