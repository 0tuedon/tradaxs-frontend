import React from "react";
import FooterLink from "./Link";

const Support = () => {
  const paths = ["terms of use", "conditions", "contact us"];
  return (
    <div>
      <h3 className="mb-4 text-sm md:text-base font-medium">Support</h3>
      <ul className="space-y-2">
        {paths.map((path, index) => {
          return <FooterLink key={index} href={path} />;
        })}
      </ul>
    </div>
  );
};

export default Support;
