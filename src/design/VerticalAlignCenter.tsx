import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M12 4H9V0H7V4H4L8 8L12 4ZM4 18H7V22H9V18H12L8 14L4 18ZM0 12V10H16V12H0Z" fill="currentColor"/>
  </svg>
);

VerticalAlignCenter.displayName = "VerticalAlignCenter";
export default VerticalAlignCenter;
