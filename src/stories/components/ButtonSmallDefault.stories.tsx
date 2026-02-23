import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../components/Button/Button";

function PlusIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4.5V13.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
      <path d="M4.5 9H13.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9H14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
      <path d="M10.5 5.5L14 9L10.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  );
}

const meta: Meta<typeof Button> = {
  title: "DS/Button Small/Default",
  component: Button,
  args: {
    children: "BUTTON DEFAULT",
    disabled: false,
    onClick: fn(),
    showIconLeft: false,
    showIconRight: false,
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["default", "hover", "focus", "press", "disabled"],
    },
    showIconLeft: { control: "boolean" },
    showIconRight: { control: "boolean" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Interactive: Story = {
  args: {
    state: undefined,
    children: "SIGN IN",
  },
};

export const DefaultState: Story = {
  args: {
    state: "default",
  },
};

export const HoverState: Story = {
  args: {
    state: "hover",
  },
};

export const FocusState: Story = {
  args: {
    state: "focus",
  },
};

export const PressState: Story = {
  args: {
    state: "press",
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    state: "disabled",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "NEW ENTITY",
    showIconLeft: true,
    iconLeft: <PlusIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "CONTINUE",
    showIconRight: true,
    iconRight: <ArrowRightIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "LIKE AND SAVE",
    showIconLeft: true,
    showIconRight: true,
    iconLeft: <PlusIcon />,
    iconRight: <ArrowRightIcon />,
  },
};
