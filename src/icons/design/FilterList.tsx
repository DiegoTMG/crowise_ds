import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterList: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6V8H21V6H3ZM10 18H14V16H10V18ZM18 13H6V11H18V13Z" fill="currentColor"/>
  </svg>
);

FilterList.displayName = "FilterList";
export default FilterList;
