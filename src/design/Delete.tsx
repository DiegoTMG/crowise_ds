import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Delete: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM11 6V16H3V6H11ZM1 4H13V16C13 17.1 12.1 18 11 18H3C1.9 18 1 17.1 1 16V4Z" fill="currentColor"/>
  </svg>
);

Delete.displayName = "Delete";
export default Delete;
