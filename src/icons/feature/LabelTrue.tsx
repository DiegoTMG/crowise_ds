import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LabelTrue: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12.41 2.58L21.41 11.58C21.77 11.94 22 12.45 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.78 13.55 22 13 22C12.45 22 11.95 21.78 11.59 21.42L2.59 12.42C2.22 12.05 2 11.55 2 11V4C2 2.9 2.9 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58ZM5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5Z" fill="currentColor"/>
  </svg>
);

LabelTrue.displayName = "LabelTrue";
export default LabelTrue;
