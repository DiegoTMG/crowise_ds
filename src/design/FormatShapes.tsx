import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatShapes: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M22 0V6H20V16H22V22H16V20H6V22H0V16H2V6H0V0H6V2H16V0H22ZM4 2H2V4H4V2ZM4 20H2V18H4V20ZM6 16V18H16V16H18V6H16V4H6V6H4V16H6ZM20 20H18V18H20V20ZM18 2V4H20V2H18ZM12.73 13H9.24L8.51 15H6.89L10.29 6H11.69L15.1 15H13.47L12.73 13ZM12.3 11.74H9.69L11 7.91L12.3 11.74Z" fill="currentColor"/>
  </svg>
);

FormatShapes.displayName = "FormatShapes";
export default FormatShapes;
