import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Label: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 14"
    fill="none"
    {...props}
  >
    <path id="icon/action/label_24px" fillRule="evenodd" clipRule="evenodd" d="M13 0C13.67 0 14.27 0.33 14.63 0.84L19 7L14.63 13.16C14.27 13.67 13.67 14 13 14L2 13.99C0.9 13.99 0 13.1 0 12V2C0 0.9 0.9 0.01 2 0.01L13 0ZM2 12H13L16.55 7L13 2H2V12Z" fill="currentColor"/>
  </svg>
);

Label.displayName = "Label";
export default Label;
