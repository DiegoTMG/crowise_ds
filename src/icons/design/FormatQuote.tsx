import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatQuote: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8.62 18H3.38L5.38 14H3V6H11V13.24L8.62 18ZM13.38 18H18.62L21 13.24V6H13V14H15.38L13.38 18ZM17.38 16H16.62L18.62 12H15V8H19V12.76L17.38 16ZM7.38 16H6.62L8.62 12H5V8H9V12.76L7.38 16Z" fill="currentColor"/>
  </svg>
);

FormatQuote.displayName = "FormatQuote";
export default FormatQuote;
