import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconOnlySquareAtom } from "./PrimaryIconOnlySquare";

const meta: Meta<typeof IconOnlySquareAtom> = {
  title: "Design System/Buttons/Primary/Icon Only Square",
  component: IconOnlySquareAtom,
  tags: ["autodocs"],
  argTypes: {
    forcedState: {
      control: "select",
      options: ["default", "hover", "focus", "pressed", "disabled", "loading"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconOnlySquareAtom>;

export const Default: Story   = { args: { forcedState: "default"  } };
export const Hover: Story     = { args: { forcedState: "hover"    } };
export const Focus: Story     = { args: { forcedState: "focus"    } };
export const Pressed: Story   = { args: { forcedState: "pressed"  } };
export const Disabled: Story  = { args: { forcedState: "disabled" } };
export const Loading: Story   = { args: { forcedState: "loading"  } };

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
      {(["default", "hover", "focus", "pressed", "disabled", "loading"] as const).map((s) => (
        <IconOnlySquareAtom key={s} forcedState={s} />
      ))}
    </div>
  ),
};
