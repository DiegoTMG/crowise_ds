import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FixedPoints: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10 5C10 7.41896 8.28224 9.43671 6 9.89998V18H4V9.89998C1.71776 9.43671 0 7.41896 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.9953 11.4444C18.1194 10.0465 16.841 8.5332 15.8712 7.4577C15.0839 6.58457 14.5 6 14.5 6C14.5 6 13.9161 6.58457 13.1288 7.4577C12.159 8.5332 10.8806 10.0465 10.0048 11.4444C9.40937 12.3947 9 13.7352 9 14.5556C9 17.5624 11.4624 20 14.5 20C17.5376 20 20 17.5624 20 14.5556C20 13.7352 19.5906 12.3947 18.9953 11.4444ZM11 14.5556C11 16.4388 12.5478 18 14.5 18C16.4522 18 18 16.4388 18 14.5556C18 14.184 17.7392 13.2066 17.3004 12.5063C16.5957 11.3816 15.5591 10.1185 14.6556 9.09875C14.603 9.03944 14.5511 8.98118 14.5 8.92406C14.4489 8.98118 14.397 9.03944 14.3444 9.09875C13.4409 10.1185 12.4043 11.3816 11.6996 12.5063C11.2608 13.2066 11 14.184 11 14.5556Z" fill="currentColor"/>
  </svg>
);

FixedPoints.displayName = "FixedPoints";
export default FixedPoints;
