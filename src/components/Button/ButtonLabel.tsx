import type { ReactNode } from "react";

type ButtonLabelProps = {
  children: ReactNode;
  disabled: boolean;
};

export function ButtonLabel({ children, disabled }: ButtonLabelProps) {
  return (
    <span
      className={`zd-text-button-1 whitespace-nowrap text-center uppercase tracking-[0.0625rem] ${
        disabled ? "text-zd-neutral-grey-midi-8" : "text-zd-neutral-grey-not-white-2"
      }`}
    >
      {children}
    </span>
  );
}
