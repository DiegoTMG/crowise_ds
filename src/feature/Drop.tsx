import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Drop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 18"
    fill="none"
    {...props}
  >
    <path id="Ellipse 1" d="M14 7C14 8.05473 13.479 9.77827 12.7212 11C10.7015 14.2564 7 18 7 18C7 18 3.29848 14.2564 1.27877 11C0.521022 9.77827 0 8.05473 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z" fill="currentColor"/>
  </svg>
);

Drop.displayName = "Drop";
export default Drop;
