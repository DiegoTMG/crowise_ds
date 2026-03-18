import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastForward: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M11.75 12L3.25 18V6L11.75 12ZM12.25 18L20.75 12L12.25 6V18ZM8.28 11.9994L5.25 9.85938V14.1394L8.28 11.9994ZM17.28 11.9994L14.25 9.85938V14.1394L17.28 11.9994Z" fill="currentColor"/>
  </svg>
);

FastForward.displayName = "FastForward";
export default FastForward;
