import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Logout: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M10 2L2 2L2 16L10 16V18H2C0.9 18 0 17.1 0 16V2C0 0.899999 0.900002 0 2 0H10L10 2ZM13.6 5.4L15 4L20 9L15 14L13.6 12.6L16.2 10H6V8H16.2L13.6 5.4Z" fill="currentColor"/>
  </svg>
);

Logout.displayName = "Logout";
export default Logout;
