import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertDriveFile: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4C4.01 2.9 4.9 2 6 2ZM6 4V20H18V9H13V4H6Z" fill="currentColor"/>
  </svg>
);

InsertDriveFile.displayName = "InsertDriveFile";
export default InsertDriveFile;
