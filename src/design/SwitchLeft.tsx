import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 14"
    fill="none"
    {...props}
  >
    <path id="vector" d="M5.5 3.62V10.38L2.12 7L5.5 3.62ZM7 0L0 7L7 14V0ZM11 0V14L18 7L11 0Z" fill="currentColor"/>
  </svg>
);

SwitchLeft.displayName = "SwitchLeft";
export default SwitchLeft;
