import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextFields: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 7.5V4.5H15.5V7.5H10.5V19.5H7.5V7.5H2.5ZM12.5 9.5H21.5V12.5H18.5V19.5H15.5V12.5H12.5V9.5Z" fill="currentColor"/>
  </svg>
);

TextFields.displayName = "TextFields";
export default TextFields;
