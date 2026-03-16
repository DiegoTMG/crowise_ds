import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 14"
    fill="none"
    {...props}
  >
    <path id="vector" d="M12.5 10.38V3.62L15.88 7L12.5 10.38ZM11 14L18 7L11 0V14ZM7 14V0L0 7L7 14Z" fill="currentColor"/>
  </svg>
);

SwitchRight.displayName = "SwitchRight";
export default SwitchRight;
