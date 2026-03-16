import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MergeType: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12.82 16.91"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.41 4.5H1.91L6.41 0L10.91 4.5H7.41V10.91L1.41 16.91L0 15.5L5.41 10.09V4.5ZM12.82 15.5L11.41 16.91L8 13.5L9.41 12.09L12.82 15.5Z" fill="currentColor"/>
  </svg>
);

MergeType.displayName = "MergeType";
export default MergeType;
