import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AssistantPhoto: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.5H13.5L13.9 5.5H19.5V15.5H12.5L12.1 13.5H6.5V20.5H4.5V3.5ZM11.94 5.89L11.86 5.5H6.5V11.5H13.74L14.06 13.11L14.14 13.5H17.5V7.5H12.26L11.94 5.89Z" fill="currentColor"/>
  </svg>
);

AssistantPhoto.displayName = "AssistantPhoto";
export default AssistantPhoto;
