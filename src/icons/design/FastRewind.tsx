import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastRewind: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 12L11.75 6V18L3.25 12ZM20.75 6L12.25 12L20.75 18V6ZM6.71973 11.9994L9.74973 14.1394V9.85938L6.71973 11.9994ZM15.7197 11.9994L18.7497 14.1394V9.85938L15.7197 11.9994Z" fill="currentColor"/>
  </svg>
);

FastRewind.displayName = "FastRewind";
export default FastRewind;
