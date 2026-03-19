import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ManageSearch: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 9H2V7H7V9ZM7 12H2V14H7V12ZM20.59 19.5L16.76 15.67C16.12 16.19 15.28 16.5 14.36 16.5C12.12 16.5 10.36 14.74 10.36 12.5C10.36 10.26 12.12 8.5 14.36 8.5C16.6 8.5 18.36 10.26 18.36 12.5C18.36 13.42 18.05 14.26 17.53 14.9L21.36 18.73L20.59 19.5ZM16.86 12.5C16.86 11.12 15.74 10 14.36 10C12.98 10 11.86 11.12 11.86 12.5C11.86 13.88 12.98 15 14.36 15C15.74 15 16.86 13.88 16.86 12.5ZM2 19H12V17H2V19Z" fill="currentColor"/>
  </svg>
);

ManageSearch.displayName = "ManageSearch";
export default ManageSearch;
