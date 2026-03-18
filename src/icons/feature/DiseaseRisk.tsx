import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DiseaseRisk: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.3006 8.3L16.0006 6H22.0006V12L19.7006 9.7L15.0006 14.4L8.10058 15.9L3.00039 22L1.40039 20.8L6.90059 14.1L14.0006 12.6L18.3006 8.3Z" fill="currentColor"/>
<path d="M11 19H9V22H11V19Z" fill="currentColor"/>
<path d="M21 14H19V22H21V14Z" fill="currentColor"/>
<path d="M14 17H16V22H14V17Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.5 1L1 11H12L6.5 1ZM7 9H6V8H7V9ZM6 7V5H7V7H6Z" fill="currentColor"/>
  </svg>
);

DiseaseRisk.displayName = "DiseaseRisk";
export default DiseaseRisk;
