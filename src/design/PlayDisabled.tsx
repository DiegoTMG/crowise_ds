import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayDisabled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19.79 19.79"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.41L1.42 0L19.79 18.38L18.38 19.79L11.6 13.01L6.61 16.19V8.02L0 1.41ZM8.61 10.02V12.55L10.16 11.57L8.61 10.02Z" fill="currentColor"/>
<path d="M17.6104 9.19141L15.0604 10.8114L6.61035 2.36141V2.19141L17.6104 9.19141Z" fill="currentColor"/>
  </svg>
);

PlayDisabled.displayName = "PlayDisabled";
export default PlayDisabled;
