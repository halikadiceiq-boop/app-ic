import type { ReactNode } from "react";

type ButtonIconSlotProps = {
  children: ReactNode;
  position: "left" | "right";
};

export function ButtonIconSlot({ children, position }: ButtonIconSlotProps) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-6 shrink-0 items-center justify-center"
      data-button-icon-position={position}
    >
      {children}
    </span>
  );
}
