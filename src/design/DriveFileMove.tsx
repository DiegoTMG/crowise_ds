import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DriveFileMove: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path id="vector" d="M18 2H10L8 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM10.16 8H6V10H10.16L8.57 11.59L9.99 13L14 9.01L9.99 5L8.58 6.41L10.16 8Z" fill="currentColor"/>
  </svg>
);

DriveFileMove.displayName = "DriveFileMove";
export default DriveFileMove;
