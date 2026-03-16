import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoAdd: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 23 21"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8 5H5V8H3V5H0V3H3V0H5V3H8V5ZM17.83 5H21C22.1 5 23 5.9 23 7V19C23 20.1 22.1 21 21 21H5C3.9 21 3 20.1 3 19V10H5V19H21V7H16.95L15.12 5H10V3H16L17.83 5ZM13 18C10.24 18 8 15.76 8 13C8 10.24 10.24 8 13 8C15.76 8 18 10.24 18 13C18 15.76 15.76 18 13 18ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10Z" fill="currentColor"/>
  </svg>
);

PhotoAdd.displayName = "PhotoAdd";
export default PhotoAdd;
