import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Article: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path d="M4 14H11V12H4V14Z" fill="currentColor"/>
<path d="M4 10H14V8H4V10Z" fill="currentColor"/>
<path d="M4 6H14V4H4V6Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z" fill="currentColor"/>
  </svg>
);

Article.displayName = "Article";
export default Article;
