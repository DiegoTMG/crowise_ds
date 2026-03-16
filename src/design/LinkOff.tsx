import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LinkOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 18.15"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M3.11 4.52L0 1.41L1.41 0L18.15 16.74L16.74 18.15L12.73 14.14H11V12.41L8.73 10.14H6V8.14H6.73L4.66 6.07C3.11 6.24 1.9 7.55 1.9 9.14C1.9 10.85 3.29 12.24 5 12.24H9V14.14H5C2.24 14.14 0 11.9 0 9.14C0 7.05 1.29 5.26 3.11 4.52ZM15 4.14H11V6.04H15C16.71 6.04 18.1 7.43 18.1 9.14C18.1 10.41 17.33 11.51 16.23 11.98L17.63 13.38C19.05 12.5 20 10.93 20 9.14C20 6.38 17.76 4.14 15 4.14ZM12.39 8.14L14 9.75V8.14H12.39Z" fill="currentColor"/>
  </svg>
);

LinkOff.displayName = "LinkOff";
export default LinkOff;
