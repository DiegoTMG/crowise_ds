import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SwitchMenu } from "../src/components/switch-menu/SwitchMenu";

const meta: Meta<typeof SwitchMenu> = {
  title: "Components/SwitchMenu",
  component: SwitchMenu,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ["not-scouted", "scouted"] },
    activeTab: { control: "radio", options: ["all", "recent", "scouted"] },
    scoutedCount: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchMenu>;

export const Default: Story = {
  args: {
    mode: "not-scouted",
    activeTab: "all",
  },
};

export const Scouted: Story = {
  args: {
    mode: "scouted",
    activeTab: "scouted",
    scoutedCount: 5,
  },
};

export const Interactive: Story = {
  render: () => {
    const [tab, setTab] = useState<"all" | "recent" | "scouted">("all");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SwitchMenu mode="not-scouted" activeTab={tab} onChange={setTab} />
        <SwitchMenu mode="scouted" activeTab={tab} scoutedCount={3} onChange={setTab} />
      </div>
    );
  },
};
