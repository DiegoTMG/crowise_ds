import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Field: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5 3H7V5L17 5V3H19V5L21 5V7H19V17H21V19H19V21H17V19L7 19V21H5V19H3V17H5V7H3V5L5 5V3ZM7 17V7L17 7V17L7 17Z" fill="currentColor"/>
  </svg>
);

Field.displayName = "Field";
export default Field;
