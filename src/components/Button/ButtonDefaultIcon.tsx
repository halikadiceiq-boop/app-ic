import type { SVGProps } from "react";

type ButtonDefaultIconProps = SVGProps<SVGSVGElement>;

export function ButtonDefaultIcon(props: ButtonDefaultIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 5V13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M5 9H13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}
