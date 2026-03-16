import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RightClick: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 21.93"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4 0 15.96 3.54 16 7.93V13.93C16 18.35 12.42 21.93 8 21.93C3.58 21.93 0 18.35 0 13.93V7.93C0.04 3.54 3.6 0 8 0ZM9 7.93H14C13.96 4.99 11.81 2.56 9 2.09V7.93ZM7 2.09V7.93H2C2.04 4.99 4.19 2.56 7 2.09ZM8 19.93C11.31 19.93 14 17.24 14 13.93V9.93H2V13.93C2 17.24 4.69 19.93 8 19.93Z" fill="currentColor"/>
  </svg>
);

RightClick.displayName = "RightClick";
export default RightClick;
