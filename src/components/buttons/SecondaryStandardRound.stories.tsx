import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryRoundAtom } from "./SecondaryStandardRound";

const meta: Meta<typeof SecondaryRoundAtom> = {
  title: "Design System/Buttons/Secondary/Standard Round",
  component: SecondaryRoundAtom,
  tags: ["autodocs"],
  argTypes: {
    forcedState: {
      control: "select",
      options: ["default", "hover", "focus", "pressed", "disabled", "loading"],
    },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryRoundAtom>;

export const Default: Story   = { args: { forcedState: "default",  label: "Button" } };
export const Hover: Story     = { args: { forcedState: "hover",    label: "Button" } };
export const Focus: Story     = { args: { forcedState: "focus",    label: "Button" } };
export const Pressed: Story   = { args: { forcedState: "pressed",  label: "Button" } };
export const Disabled: Story  = { args: { forcedState: "disabled", label: "Button" } };
export const Loading: Story   = { args: { forcedState: "loading",  label: "Button" } };

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
      {(["default", "hover", "focus", "pressed", "disabled", "loading"] as const).map((s) => (
        <SecondaryRoundAtom key={s} forcedState={s} label={s.charAt(0).toUpperCase() + s.slice(1)} />
      ))}
    </div>
  ),
};
