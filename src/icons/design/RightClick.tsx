import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RightClick: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M20 8.965C19.96 4.575 16.4 1.035 12 1.035C7.6 1.035 4.04 4.575 4 8.965V14.965C4 19.385 7.58 22.965 12 22.965C16.42 22.965 20 19.385 20 14.965V8.965ZM11 3.125V8.965H6C6.04 6.025 8.19 3.595 11 3.125ZM12 20.965C15.31 20.965 18 18.275 18 14.965V10.965H6V14.965C6 18.275 8.69 20.965 12 20.965Z" fill="currentColor"/>
  </svg>
);

RightClick.displayName = "RightClick";
export default RightClick;
