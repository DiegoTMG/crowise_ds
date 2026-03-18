import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Integration: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18 17H19C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11H18V8C18 6.89543 17.1046 6 16 6H13V5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5V6H4C2.89543 6 2 6.89543 2 8V13H5C5.55228 13 6 13.4477 6 14C6 14.5523 5.55228 15 5 15H2V20C2 21.1046 2.89543 22 4 22H9V19C9 18.4477 9.44772 18 10 18C10.5523 18 11 18.4477 11 19V22H16C17.1046 22 18 21.1046 18 20V17ZM13 20H16V15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H16V8H11V5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V8H4V11H5C6.65685 11 8 12.3431 8 14C8 15.6569 6.65685 17 5 17H4V20H7V19C7 17.3431 8.34315 16 10 16C11.6569 16 13 17.3431 13 19V20Z" fill="currentColor"/>
  </svg>
);

Integration.displayName = "Integration";
export default Integration;
