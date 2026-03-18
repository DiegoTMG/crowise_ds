import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListNumbered: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 8H3.5V5H2.5V4H4.5V8ZM4.5 17.5V17H2.5V16H5.5V20H2.5V19H4.5V18.5H3.5V17.5H4.5ZM2.5 11H4.3L2.5 13.1V14H5.5V13H3.7L5.5 10.9V10H2.5V11ZM7.5 7V5H21.5V7H7.5ZM7.5 19H21.5V17H7.5V19ZM21.5 13H7.5V11H21.5V13Z" fill="currentColor"/>
  </svg>
);

FormatListNumbered.displayName = "FormatListNumbered";
export default FormatListNumbered;
