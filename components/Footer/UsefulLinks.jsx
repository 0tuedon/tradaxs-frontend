import React from "react";
import FooterLink from "./Link";

const UsefulLinks = () => {
  const paths = ["about us", "blog", "what we offer", "Create wallet"];
  return (
    <div>
      <h3 className="mb-4 text-sm md:text-base font-medium">Useful Links</h3>
      <ul className="space-y-2">
        {paths.map((path, index) => {
          return <FooterLink key={index} href={path} />;
        })}
      </ul>
    </div>
  );
};

export default UsefulLinks;
