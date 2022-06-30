import React from "react";

const PreAuth = ({ children,className }) => {
  return (
    <div
      className={`w-screen h-screen ${className}`}
      style={{
        background: "url(/image/auth.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default PreAuth;
