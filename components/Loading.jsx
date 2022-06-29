import React from "react";

const Loading = () => {
  return (
    <svg
      version="1.1"
      className="flex justify-center items-center 
      mx-auto
      ml-[30%]
      mt-[4%]
      "
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle fill="#0C4DAE" stroke="none" cx="2" cy="2.5" r="0.9">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#0C4DAE" stroke="none" cx="5" cy="2.5" r="0.9">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#0C4DAE" stroke="none" cx="8" cy="2.5" r="0.9">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
};

export default Loading;
