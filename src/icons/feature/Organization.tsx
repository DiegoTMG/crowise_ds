import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Organization: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4L2 12.9H4.9V21H19.1V12.9H22L12 4ZM17.1 19H13V16.5C14.7 16.5 16.1 15.1 16.1 13.5V11.5H14.1C13.3 11.5 12.6 11.8 12.1 12.3C11.6 11.8 10.8 11.5 10.1 11.5H8.1V13.5C8.1 15.2 9.5 16.5 11.2 16.5V19H6.9V11.3L12 6.7L17.1 11.2V19ZM13 14.4C13 13.8 13.5 13.4 14 13.4C14 14 13.6 14.4 13 14.4ZM11 14.4C10.4 14.4 10 13.9 10 13.4C10.5 13.4 11 13.9 11 14.4Z" fill="currentColor"/>
  </svg>
);

Organization.displayName = "Organization";
export default Organization;
