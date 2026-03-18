import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DropTrue: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 14C19 12.9453 18.479 11.2217 17.7212 10C15.7015 6.74359 12 3 12 3C12 3 8.29848 6.74359 6.27877 10C5.52102 11.2217 5 12.9453 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z" fill="currentColor"/>
  </svg>
);

DropTrue.displayName = "DropTrue";
export default DropTrue;
