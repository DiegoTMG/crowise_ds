import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SwitchMenu } from "./SwitchMenu";

const meta: Meta<typeof SwitchMenu> = {
  title: "Design System/Switch Menu",
  component: SwitchMenu,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["not-scouted", "scouted"],
    },
    activeTab: {
      control: "select",
      options: ["all", "recent", "scouted"],
    },
    scoutedCount: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchMenu>;

export const NotScoutedAll: Story = {
  name: "Not Scouted / Active: All",
  args: { mode: "not-scouted", activeTab: "all" },
};

export const NotScoutedRecent: Story = {
  name: "Not Scouted / Active: Recent",
  args: { mode: "not-scouted", activeTab: "recent" },
};

export const ScoutedAll: Story = {
  name: "Scouted / Active: All",
  args: { mode: "scouted", activeTab: "all", scoutedCount: 1 },
};

export const ScoutedActive: Story = {
  name: "Scouted / Active: Scouted",
  args: { mode: "scouted", activeTab: "scouted", scoutedCount: 1 },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
      <SwitchMenu mode="not-scouted" activeTab="all" />
      <SwitchMenu mode="not-scouted" activeTab="recent" />
      <SwitchMenu mode="scouted" activeTab="all" scoutedCount={3} />
      <SwitchMenu mode="scouted" activeTab="scouted" scoutedCount={3} />
    </div>
  ),
};
