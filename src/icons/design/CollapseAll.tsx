import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CollapseAll: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 18H3V16H13V18ZM21 16H15L18 13L21 16ZM13 13H3V11H13V13ZM18 11L15 8H21L18 11ZM13 8H3V6H13V8Z" fill="currentColor"/>
  </svg>
);

CollapseAll.displayName = "CollapseAll";
export default CollapseAll;
