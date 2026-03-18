import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MoneyOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M14.925 9C14.865 7.75 14.205 6.9 12.425 6.9C12.025 6.9 11.655 6.95 11.335 7.03L9.82499 5.52C10.175 5.37 10.535 5.24 10.925 5.16V3H13.925V5.19C16.015 5.7 17.065 7.28 17.135 9H14.925ZM3.98499 5.33187L5.39499 3.92188L20.015 18.5419L18.605 19.9519L16.385 17.7319C15.755 18.3019 14.885 18.6719 13.925 18.8519V21.0019H10.925V18.8319C9.00499 18.4219 7.36499 17.1919 7.24499 15.0019H9.44499C9.55499 16.1819 10.365 17.1019 12.425 17.1019C13.795 17.1019 14.505 16.6819 14.845 16.1919L11.335 12.6819C8.98499 11.9919 7.42499 10.8519 7.42499 8.77187L3.98499 5.33187Z" fill="currentColor"/>
  </svg>
);

MoneyOff.displayName = "MoneyOff";
export default MoneyOff;
