import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Recommendation: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21.15 19.15L19.15 21.15L14 16V14H16L21.15 19.15ZM22.85 20.85L21.85 19.85L19.85 21.85L20.85 22.85C21.04 23.04 21.36 23.04 21.56 22.85L22.85 21.56C23.05 21.36 23.05 21.05 22.85 20.85Z" fill="currentColor"/>
<path d="M15.17 20H6V4H13.17L18 8.83V13.17L20 15.17V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H17.17L15.17 20Z" fill="currentColor"/>
<path d="M18.5 9H13V3.5L18.5 9Z" fill="currentColor"/>
  </svg>
);

Recommendation.displayName = "Recommendation";
export default Recommendation;
