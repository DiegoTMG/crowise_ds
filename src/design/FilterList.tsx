import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FilterList: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 0V2H18V0H0ZM7 12H11V10H7V12ZM15 7H3V5H15V7Z" fill="currentColor"/>
  </svg>
);

FilterList.displayName = "FilterList";
export default FilterList;
