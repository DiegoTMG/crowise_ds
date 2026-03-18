import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Logout: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 5L4 5L4 19L12 19V21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H12L12 5ZM15.6 8.4L17 7L22 12L17 17L15.6 15.6L18.2 13H8V11H18.2L15.6 8.4Z" fill="currentColor"/>
  </svg>
);

Logout.displayName = "Logout";
export default Logout;
