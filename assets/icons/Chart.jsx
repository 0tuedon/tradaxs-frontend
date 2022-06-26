import React from "react";

const Negative = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 33 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 10.1623C32 10.1623 29.2079 4.38018 26 6.16233C22.7921 7.94449 19.8016 7.96957 14.9008 2.56595C10 -2.83767 6.34646 7.91241 1 2.56595"
        stroke="url(#paint0_linear_0_35)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_35"
          x1="12.8537"
          y1="-1.42577"
          x2="19.2383"
          y2="15.0944"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A330FF" stopOpacity="0.01" />
          <stop offset="0.393247" stopColor="#BC3DCB" />
          <stop offset="1" stopColor="#E3507A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Positive = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 34 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.3936C1 11.3936 3.79213 6.21785 7 8C10.2079 9.78215 10.6236 11.3936 13.4751 10.3244C16.3265 9.25506 16.505 0.217849 19 2C21.495 3.78215 27.6535 7.34646 33 2"
        stroke="url(#paint0_linear_0_14)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_14"
          x1="21.2328"
          y1="-0.595991"
          x2="14.6983"
          y2="16.0173"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AAFFF7" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { Positive, Negative };
