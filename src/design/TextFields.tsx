import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextFields: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 15"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 3V0H13V3H8V15H5V3H0ZM10 5H19V8H16V15H13V8H10V5Z" fill="currentColor"/>
  </svg>
);

TextFields.displayName = "TextFields";
export default TextFields;
