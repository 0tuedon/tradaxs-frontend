import React from "react";

const Loading = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" 
xmlnsXlink="http://www.w3.org/1999/xlink" 
style=
{{margin: '0 auto', 
background:'none',
 display: 'block', 
 shapeRendering: 'auto',}}
width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#EAEAEA" strokeWidth="9" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</svg>
  )
};

export default Loading;
