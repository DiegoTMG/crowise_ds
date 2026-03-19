import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconOnlyCircleAtom } from "./PrimaryIconOnlyCircle";

const meta: Meta<typeof IconOnlyCircleAtom> = {
  title: "Design System/Buttons/Primary/Icon Only Circle",
  component: IconOnlyCircleAtom,
  tags: ["autodocs"],
  argTypes: {
    forcedState: {
      control: "select",
      options: ["default", "hover", "focus", "pressed", "disabled", "loading"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconOnlyCircleAtom>;

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
        <IconOnlyCircleAtom key={s} forcedState={s} />
      ))}
    </div>
  ),
};
