import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Mouse: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.035C16.4 1.035 19.96 4.575 20 8.965V14.965C20 19.385 16.42 22.965 12 22.965C7.58 22.965 4 19.385 4 14.965V8.965C4.04 4.575 7.6 1.035 12 1.035ZM13 8.965H18C17.96 6.025 15.81 3.595 13 3.125V8.965ZM11 3.125V8.965H6C6.04 6.025 8.19 3.595 11 3.125ZM12 20.965C15.31 20.965 18 18.275 18 14.965V10.965H6V14.965C6 18.275 8.69 20.965 12 20.965Z" fill="currentColor"/>
  </svg>
);

Mouse.displayName = "Mouse";
export default Mouse;
