import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DragHandle: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 6"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 0H16V2H0V0ZM16 6H0V4H16V6Z" fill="currentColor"/>
  </svg>
);

DragHandle.displayName = "DragHandle";
export default DragHandle;
