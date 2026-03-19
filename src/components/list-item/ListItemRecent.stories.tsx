import type { Meta, StoryObj } from "@storybook/react";
import { ListItemRecent } from "./ListItemRecent";
import Scout from "../../icons/feature/Scout";
import React from "react";

const meta: Meta<typeof ListItemRecent> = {
  title: "Design System/ListItemRecent",
  component: ListItemRecent,
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => (
      <div style={{ width: 300, fontFamily: "'Noto Sans', sans-serif" }}>
        <StoryFn />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListItemRecent>;

export const Default: Story = {
  args: {
    icon: <Scout size={18} />,
    title: "Pest, disease, and weed",
    info: "50 items to inspect",
  },
};

export const Checked: Story = {
  name: "With checkmark",
  args: {
    icon: <Scout size={18} />,
    title: "Pest, disease, and weed",
    info: "50 items to inspect",
    checked: true,
  },
};

export const SingleItem: Story = {
  name: "Single item",
  args: {
    icon: <Scout size={18} />,
    title: "Planting Quality",
    info: "1 item to inspect",
    checked: true,
  },
};

export const GridExample: Story = {
  name: "Grid of cards",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: 390 }}>
      <ListItemRecent icon={<Scout size={18} />} title="Planting Quality" info="1 item to inspect" checked />
      <ListItemRecent icon={<Scout size={18} />} title="Plant Stand" info="1 item to inspect" checked />
      <ListItemRecent icon={<Scout size={18} />} title="Nutrition" info="10 items to inspect" />
      <ListItemRecent icon={<Scout size={18} />} title="Pest, disease, and weed" info="50 items to inspect" />
    </div>
  ),
};
