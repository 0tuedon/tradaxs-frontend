import React, { Children } from "react";
import Footer from "../Footer";
import NavBar from "../Landing/NavBar";


const PublicLayout = ({ children }) => {
  return (
    <div className="
    relative
     w-full min-h-screen 
     bg-landingBlue
     overflow-hidden">
      <NavBar/>
     {children}
    </div>
  );
};

export default PublicLayout;