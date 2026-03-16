import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Category: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M3.5 9L9 0L14.5 9H3.5ZM10.93 7L9 3.84L7.06 7H10.93ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM12 15.5C12 16.88 13.12 18 14.5 18C15.88 18 17 16.88 17 15.5C17 14.12 15.88 13 14.5 13C13.12 13 12 14.12 12 15.5ZM0 19.5H8V11.5H0V19.5ZM6 13.5H2V17.5H6V13.5Z" fill="currentColor"/>
  </svg>
);

Category.displayName = "Category";
export default Category;
