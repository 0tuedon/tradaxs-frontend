import React, { Children } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;