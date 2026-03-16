import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderOpen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M10 2H18C19.1 2 20 2.9 20 4V14C20 15.1 19.1 16 18 16H2C0.9 16 0 15.1 0 14L0.01 2C0.01 0.9 0.9 0 2 0H8L10 2ZM2 4V14H18V4H2Z" fill="currentColor"/>
  </svg>
);

FolderOpen.displayName = "FolderOpen";
export default FolderOpen;
