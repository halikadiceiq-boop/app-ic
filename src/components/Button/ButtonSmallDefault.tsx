import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonDefaultIcon } from "./ButtonDefaultIcon";
import { ButtonIconSlot } from "./ButtonIconSlot";
import { ButtonLabel } from "./ButtonLabel";

export type ButtonSmallDefaultState = "default" | "hover" | "focus" | "press" | "disabled";

export type ButtonSmallDefaultProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  children?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  state?: ButtonSmallDefaultState;
};

const baseClasses =
  "inline-flex h-9 items-center gap-zd-spacing-6 rounded-zd-borderRadius-6 border px-zd-spacing-12 transition-colors duration-150";

const interactiveClasses =
  "border-transparent bg-zd-primary-dutchblue-primary-7 text-zd-neutral-grey-not-white-2 hover:bg-zd-primary-dutchblue-primary-8 active:bg-zd-primary-dutchblue-primary-5 focus-visible:border-zd-primary-dutchblue-primary-9 focus-visible:outline-none";

const forcedStateClasses: Record<ButtonSmallDefaultState, string> = {
  default: "border-transparent bg-zd-primary-dutchblue-primary-7 text-zd-neutral-grey-not-white-2",
  hover: "cursor-pointer border-transparent bg-zd-primary-dutchblue-primary-8 text-zd-neutral-grey-not-white-2",
  focus: "border-zd-primary-dutchblue-primary-9 bg-zd-primary-dutchblue-primary-7 text-zd-neutral-grey-not-white-2",
  press: "border-transparent bg-zd-primary-dutchblue-primary-5 text-zd-neutral-grey-not-white-2",
  disabled: "cursor-not-allowed border-transparent bg-zd-neutral-grey-chrome-5 text-zd-neutral-grey-midi-8",
};

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ButtonSmallDefault({
  children = "BUTTON DEFAULT",
  disabled,
  iconLeft,
  iconRight,
  showIconLeft = false,
  showIconRight = false,
  state,
  type = "button",
  ...rest
}: ButtonSmallDefaultProps) {
  const visualState: ButtonSmallDefaultState = state ?? (disabled ? "disabled" : "default");
  const isDisabled = disabled || visualState === "disabled";

  return (
    <button
      aria-disabled={isDisabled || undefined}
      className={joinClasses(
        baseClasses,
        state ? forcedStateClasses[visualState] : interactiveClasses,
        isDisabled && !state && "cursor-not-allowed",
      )}
      data-button-size="small"
      data-button-state={visualState}
      data-button-variant="default"
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {showIconLeft ? <ButtonIconSlot position="left">{iconLeft ?? <ButtonDefaultIcon />}</ButtonIconSlot> : null}
      <ButtonLabel disabled={isDisabled}>{children}</ButtonLabel>
      {showIconRight ? <ButtonIconSlot position="right">{iconRight ?? <ButtonDefaultIcon />}</ButtonIconSlot> : null}
    </button>
  );
}
