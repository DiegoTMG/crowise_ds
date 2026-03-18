import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ResearchBlocks: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7 3H5V5L3 5V7H5V17H3V19H5V21H7V19L17 19V21H19V19H21V17H19V7H21V5L19 5V3H17V5L7 5V3ZM7 12V17L17 17V7H12V12H7Z" fill="currentColor"/>
  </svg>
);

ResearchBlocks.displayName = "ResearchBlocks";
export default ResearchBlocks;
