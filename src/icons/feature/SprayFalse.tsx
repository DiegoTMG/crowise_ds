import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SprayFalse: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.8109 3.5821L14.3135 9.86439L12.8872 8.43804L16.0572 4H8.44912L6.44912 2H17.9978C18.8117 2 19.2847 2.92034 18.8109 3.5821Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.5513 11L5.33203 3.7807L5.36124 3.8215L4.39912 2.85938L3 4.25849L10.7415 12H10.5005L9.12438 15.647C8.87758 16.301 9.36091 17 10.06 17H13.9421C14.4478 17 14.8406 16.6342 14.9258 16.1843L19.6009 20.8594L21 19.4603L12.5397 11H12.5513ZM11.5005 14L11.0005 15H13.0005L12.5005 14H11.5005Z" fill="currentColor"/>
<path d="M11.0005 19V23H13.0005V19H11.0005Z" fill="currentColor"/>
<path d="M14.1685 18.5547L15.8326 21.0508L17.4967 19.9414L15.8326 17.4453L14.1685 18.5547Z" fill="currentColor"/>
<path d="M8.16851 17.4453L6.50441 19.9415L8.16851 21.0509L9.83261 18.5547L8.16851 17.4453Z" fill="currentColor"/>
  </svg>
);

SprayFalse.displayName = "SprayFalse";
export default SprayFalse;
