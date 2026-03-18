import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SplitScreen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4 4H7C8.11 4 9 4.9 9 6V18C9 19.1 8.1 20 7 20H4C2.89 20 2 19.1 2 18V6C2 4.9 2.89 4 4 4ZM7 6H4V18H7V6Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17 4H20C21.11 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H17C15.89 20 15 19.1 15 18V6C15 4.9 15.89 4 17 4ZM20 6H17V18H20V6Z" fill="currentColor"/>
<path d="M13 4H11V20H13V4Z" fill="currentColor"/>
  </svg>
);

SplitScreen.displayName = "SplitScreen";
export default SplitScreen;
