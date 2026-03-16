import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertDriveFile: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M2 0H10L16 6V18C16 19.1 15.1 20 14 20H1.99C0.89 20 0 19.1 0 18L0.01 2C0.01 0.9 0.9 0 2 0ZM2 2V18H14V7H9V2H2Z" fill="currentColor"/>
  </svg>
);

InsertDriveFile.displayName = "InsertDriveFile";
export default InsertDriveFile;
