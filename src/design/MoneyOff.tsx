import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MoneyOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16.03 18.0019"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M10.94 6C10.88 4.75 10.22 3.9 8.44 3.9C8.04 3.9 7.67 3.95 7.35 4.03L5.84 2.52C6.19 2.37 6.55 2.24 6.94 2.16V0H9.94V2.19C12.03 2.7 13.08 4.28 13.15 6H10.94ZM0 2.33187L1.41 0.921875L16.03 15.5419L14.62 16.9519L12.4 14.7319C11.77 15.3019 10.9 15.6719 9.94 15.8519V18.0019H6.94V15.8319C5.02 15.4219 3.38 14.1919 3.26 12.0019H5.46C5.57 13.1819 6.38 14.1019 8.44 14.1019C9.81 14.1019 10.52 13.6819 10.86 13.1919L7.35 9.68188C5 8.99188 3.44 7.85187 3.44 5.77187L0 2.33187Z" fill="currentColor"/>
  </svg>
);

MoneyOff.displayName = "MoneyOff";
export default MoneyOff;
