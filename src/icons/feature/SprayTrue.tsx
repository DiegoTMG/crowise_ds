import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SprayTrue: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 12H13.5L14.8771 15.6467C15.1241 16.3008 14.6408 17 13.9416 17H10.0595C9.36037 17 8.87704 16.301 9.12384 15.647L10.5 12ZM11.5 14L11 15H13L12.5 14H11.5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11 23L11 19H13L13 23H11Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.8321 21.0508L14.168 18.5547L15.8321 17.4453L17.4962 19.9414L15.8321 21.0508Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.50387 19.9415L8.16797 17.4453L9.83207 18.5547L8.16797 21.0509L6.50387 19.9415Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.18933 3.58212C4.71556 2.92036 5.18856 2 6.00243 2H17.9973C18.8112 2 19.2842 2.92034 18.8104 3.5821L13.5 11H10.5L5.18933 3.58212ZM7.94302 4L11.5144 9H12.4852L16.0566 4H7.94302Z" fill="currentColor"/>
  </svg>
);

SprayTrue.displayName = "SprayTrue";
export default SprayTrue;
