import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhotoCameraOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16.8 5H20C21.1 5 22 5.9 22 7V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H7.2L9 3H15L16.8 5ZM7 13C7 15.8 9.2 18 12 18C14.8 18 17 15.8 17 13C17 10.2 14.8 8 12 8C9.2 8 7 10.2 7 13ZM15.2 13C15.2 14.8 13.8 16.2 12 16.2C10.2 16.2 8.8 14.8 8.8 13C8.8 11.2 10.2 9.8 12 9.8C13.8 9.8 15.2 11.2 15.2 13Z" fill="currentColor"/>
  </svg>
);

PhotoCameraOff.displayName = "PhotoCameraOff";
export default PhotoCameraOff;
