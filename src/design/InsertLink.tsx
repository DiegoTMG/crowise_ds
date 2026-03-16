import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertLink: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 10"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM11 0H15C17.76 0 20 2.24 20 5C20 7.76 17.76 10 15 10H11V8.1H15C16.71 8.1 18.1 6.71 18.1 5C18.1 3.29 16.71 1.9 15 1.9H11V0Z" fill="currentColor"/>
  </svg>
);

InsertLink.displayName = "InsertLink";
export default InsertLink;
