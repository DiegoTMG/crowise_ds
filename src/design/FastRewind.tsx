import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastRewind: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17.5 12"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 6L8.5 0V12L0 6ZM17.5 0L9 6L17.5 12V0ZM3.46973 5.99938L6.49973 8.13938V3.85938L3.46973 5.99938ZM12.4697 5.99938L15.4997 8.13938V3.85938L12.4697 5.99938Z" fill="currentColor"/>
  </svg>
);

FastRewind.displayName = "FastRewind";
export default FastRewind;
