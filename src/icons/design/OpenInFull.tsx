import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OpenInFull: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 21L3 13H5L5 17.6L17.6 5H13V3L21 3V11H19V6.4L6.4 19H11V21H3Z" fill="currentColor"/>
  </svg>
);

OpenInFull.displayName = "OpenInFull";
export default OpenInFull;
