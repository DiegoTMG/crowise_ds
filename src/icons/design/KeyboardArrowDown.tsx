import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowDown: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7.41 8.29688L12 12.8769L16.59 8.29688L18 9.70687L12 15.7069L6 9.70687L7.41 8.29688Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowDown.displayName = "KeyboardArrowDown";
export default KeyboardArrowDown;
