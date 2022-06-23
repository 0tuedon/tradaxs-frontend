import React from "react";

const NavLink = ({ children, style, route }) => {
  return (
    <div className={`${style} text-white`}>
      <a href={route} className="text-sm">
        {children}
      </a>
    </div>
  );
};

export default NavLink;
