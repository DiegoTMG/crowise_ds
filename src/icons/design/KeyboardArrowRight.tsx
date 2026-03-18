import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowRight.displayName = "KeyboardArrowRight";
export default KeyboardArrowRight;
