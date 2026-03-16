import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Organization: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 17"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M10 0L0 8.9H2.9V17H17.1V8.9H20L10 0ZM15.1 15H11V12.5C12.7 12.5 14.1 11.1 14.1 9.5V7.5H12.1C11.3 7.5 10.6 7.8 10.1 8.3C9.6 7.8 8.8 7.5 8.1 7.5H6.1V9.5C6.1 11.2 7.5 12.5 9.2 12.5V15H4.9V7.3L10 2.7L15.1 7.2V15ZM11 10.4C11 9.8 11.5 9.4 12 9.4C12 10 11.6 10.4 11 10.4ZM9 10.4C8.4 10.4 8 9.9 8 9.4C8.5 9.4 9 9.9 9 10.4Z" fill="currentColor"/>
  </svg>
);

Organization.displayName = "Organization";
export default Organization;
