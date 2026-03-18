import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DragHandle: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4 9H20V11H4V9ZM20 15H4V13H20V15Z" fill="currentColor"/>
  </svg>
);

DragHandle.displayName = "DragHandle";
export default DragHandle;
