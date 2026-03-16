import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastForward: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17.5 12"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M8.5 6L0 12V0L8.5 6ZM9 12L17.5 6L9 0V12ZM5.03 5.99938L2 3.85938V8.13938L5.03 5.99938ZM14.03 5.99938L11 3.85938V8.13938L14.03 5.99938Z" fill="currentColor"/>
  </svg>
);

FastForward.displayName = "FastForward";
export default FastForward;
