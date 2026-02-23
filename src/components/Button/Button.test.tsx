import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders label text", () => {
    render(<Button>SIGN IN</Button>);

    expect(screen.getByRole("button", { name: "SIGN IN" })).toBeInTheDocument();
  });

  it("calls onClick when enabled", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>CLICK ME</Button>);
    fireEvent.click(screen.getByRole("button", { name: "CLICK ME" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        DISABLED
      </Button>,
    );
    fireEvent.click(screen.getByRole("button", { name: "DISABLED" }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies explicit visual state", () => {
    render(<Button state="focus">FOCUS</Button>);

    const button = screen.getByRole("button", { name: "FOCUS" });
    expect(button).toHaveAttribute("data-button-state", "focus");
  });

  it("renders icon slots when enabled", () => {
    render(
      <Button
        iconLeft={<svg data-testid="left-icon" />}
        iconRight={<svg data-testid="right-icon" />}
        showIconLeft
        showIconRight
      >
        ICONS
      </Button>,
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });
});
