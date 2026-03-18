import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddMap: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 8H13V11H16V13H13V16H11V13H8V11H11V8Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21 18.62C21 18.85 20.85 19.03 20.64 19.1L15 21L9 18.9L3.66 20.97L3.5 21C3.22 21 3 20.78 3 20.5V5.38C3 5.15 3.15 4.97 3.36 4.9L9 3L15 5.1L20.34 3.03L20.5 3C20.78 3 21 3.22 21 3.5V18.62ZM19 17.542L15.0124 18.8854L8.96469 16.7687L5 18.3056V6.45796L8.98759 5.11462L15.0353 7.23132L19 5.69445V17.542Z" fill="currentColor"/>
  </svg>
);

AddMap.displayName = "AddMap";
export default AddMap;
