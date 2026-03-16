import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CreateNewFolder: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M18 2H10L8 0H2C0.89 0 0.01 0.89 0.01 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V4C20 2.89 19.11 2 18 2ZM2 14V2H7.17L9.17 4H18V14H2ZM12 10H10V8H12V6H14V8H16V10H14V12H12V10Z" fill="currentColor"/>
  </svg>
);

CreateNewFolder.displayName = "CreateNewFolder";
export default CreateNewFolder;
