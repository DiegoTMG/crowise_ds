import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rename: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H15V2H17V0H11V2H13V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H13V20H11V22H17V20H15V18H20C21.1 18 21.99 17.1 21.99 16L22 6ZM2 6V16H13V6H2ZM20 6V16H15V6H20Z" fill="currentColor"/>
  </svg>
);

Rename.displayName = "Rename";
export default Rename;
