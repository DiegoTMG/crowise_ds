import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiUnstable: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 8.5525L1 6.5525C7.08 0.4825 16.93 0.4825 23 6.5525L21 8.5525C16.03 3.5825 7.97 3.5825 3 8.5525Z" fill="currentColor"/>
<path d="M12 17.5536L9 14.5536C10.66 12.8936 13.35 12.8936 15 14.5536L12 17.5536Z" fill="currentColor"/>
<path d="M5 10.5513L7 12.5513C9.4471 10.1041 13.2463 9.82672 16 11.719V9H16.9906C13.2027 6.78927 8.2533 7.30635 5 10.5513Z" fill="currentColor"/>
<path d="M19 10V18H17V10H19ZM17 20V22H19V20H17Z" fill="currentColor"/>
  </svg>
);

WifiUnstable.displayName = "WifiUnstable";
export default WifiUnstable;
