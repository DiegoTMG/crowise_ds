import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoAdd: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M9 8H6V11H4V8H1V6H4V3H6V6H9V8ZM18.83 8H22C23.1 8 24 8.9 24 10V22C24 23.1 23.1 24 22 24H6C4.9 24 4 23.1 4 22V13H6V22H22V10H17.95L16.12 8H11V6H17L18.83 8ZM14 21C11.24 21 9 18.76 9 16C9 13.24 11.24 11 14 11C16.76 11 19 13.24 19 16C19 18.76 16.76 21 14 21ZM14 13C15.65 13 17 14.35 17 16C17 17.65 15.65 19 14 19C12.35 19 11 17.65 11 16C11 14.35 12.35 13 14 13Z" fill="currentColor"/>
  </svg>
);

PhotoAdd.displayName = "PhotoAdd";
export default PhotoAdd;
