import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ href = "/", exact, children, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive && !exact) {
    props.className +=
      " bg-white text-accent md:bg-transparent md:underline md:text-white";
  }

  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;
