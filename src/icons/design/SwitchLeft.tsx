import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8.5 8.62V15.38L5.12 12L8.5 8.62ZM10 5L3 12L10 19V5ZM14 5V19L21 12L14 5Z" fill="currentColor"/>
  </svg>
);

SwitchLeft.displayName = "SwitchLeft";
export default SwitchLeft;
