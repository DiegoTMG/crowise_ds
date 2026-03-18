import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Check: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8.79508 15.8769L4.62508 11.7069L3.20508 13.1169L8.79508 18.7069L20.7951 6.70687L19.3851 5.29688L8.79508 15.8769Z" fill="currentColor"/>
  </svg>
);

Check.displayName = "Check";
export default Check;
