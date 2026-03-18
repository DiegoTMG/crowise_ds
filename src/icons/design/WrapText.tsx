import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WrapText: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4H3.5V6H19.5V4ZM3.5 18H9.5V16H3.5V18ZM3.5 10H16.5C18.71 10 20.5 11.79 20.5 14C20.5 16.21 18.71 18 16.5 18H14.5V20L11.5 17L14.5 14V16H16.75C17.85 16 18.75 15.1 18.75 14C18.75 12.9 17.85 12 16.75 12H3.5V10Z" fill="currentColor"/>
  </svg>
);

WrapText.displayName = "WrapText";
export default WrapText;
