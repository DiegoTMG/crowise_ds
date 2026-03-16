import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Cloud: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.35 4.04C6.6 1.64 9.11 0 12 0C15.64 0 18.67 2.59 19.35 6.04C21.95 6.22 24 8.36 24 11C24 13.76 21.76 16 19 16H6C2.69 16 0 13.31 0 10C0 6.91 2.34 4.36 5.35 4.04ZM17.39 6.43C16.88 3.86 14.62 2 12 2C9.94 2 8.08 3.14 7.13 4.97L6.63 5.92L5.56 6.03C3.53 6.24 2 7.95 2 10C2 12.21 3.79 14 6 14H19C20.65 14 22 12.65 22 11C22 9.45 20.78 8.14 19.22 8.04L17.69 7.93L17.39 6.43Z" fill="currentColor"/>
  </svg>
);

Cloud.displayName = "Cloud";
export default Cloud;
