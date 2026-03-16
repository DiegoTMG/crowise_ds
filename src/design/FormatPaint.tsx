import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatPaint: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M14 1V2H17V10H9V19C9 19.55 8.55 20 8 20H6C5.45 20 5 19.55 5 19V8H15V4H14V5C14 5.55 13.55 6 13 6H1C0.45 6 0 5.55 0 5V1C0 0.45 0.45 0 1 0H13C13.55 0 14 0.45 14 1ZM2 4H12V2H2V4Z" fill="currentColor"/>
  </svg>
);

FormatPaint.displayName = "FormatPaint";
export default FormatPaint;
