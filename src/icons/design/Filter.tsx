import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Filter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M17 9H15V3H17V5H21V7H17V9ZM3 7V5H13V7H3ZM3 19V17H9V19H3ZM13 21V19H21V17H13V15H11V21H13ZM7 11V9H9V15H7V13H3V11H7ZM21 13V11H11V13H21Z" fill="currentColor"/>
  </svg>
);

Filter.displayName = "Filter";
export default Filter;
