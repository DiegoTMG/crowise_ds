import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LabelFalse: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2L4 2C2.9 2 2 2.9 2 4L2 11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM18.9911 11.9906L11.408 4.4075C11.1517 4.15113 10.7956 3.99446 10.4039 3.99446L5.41891 3.99446C4.63555 3.99446 3.99463 4.63539 3.99463 5.41874L3.99463 10.4037C3.99463 10.7954 4.1513 11.1515 4.41479 11.415L11.9979 18.9981C12.2542 19.2544 12.6103 19.4111 13.002 19.4111C13.3937 19.4111 13.7497 19.2544 14.0061 18.9909L18.9911 14.0059C19.2546 13.7496 19.4113 13.3935 19.4113 13.0018C19.4113 12.6101 19.2475 12.2469 18.9911 11.9906Z" fill="currentColor"/>
<path d="M6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5Z" fill="currentColor"/>
  </svg>
);

LabelFalse.displayName = "LabelFalse";
export default LabelFalse;
