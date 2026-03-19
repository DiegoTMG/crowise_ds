import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";
import Scout from "../../icons/feature/Scout";
import React from "react";

const meta: Meta<typeof ListItem> = {
  title: "Design System/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => (
      <div style={{ width: 390, fontFamily: "'Noto Sans', sans-serif" }}>
        <StoryFn />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    icon: <Scout size={18} />,
    title: "Planting Quality",
    info: "1 item to inspect",
  },
};

export const Checked: Story = {
  name: "With checkmark",
  args: {
    icon: <Scout size={18} />,
    title: "Planting Quality",
    info: "1 item to inspect",
    checked: true,
  },
};

export const MultipleItems: Story = {
  name: "Multiple items",
  args: {
    icon: <Scout size={18} />,
    title: "Pest, disease, and weed",
    info: "50 items to inspect",
  },
};

export const LongTitle: Story = {
  name: "Long title (truncated)",
  args: {
    icon: <Scout size={18} />,
    title: "A very long inspection group name that should be truncated",
    info: "10 items to inspect",
  },
};

export const NoInfo: Story = {
  name: "Without info text",
  args: {
    icon: <Scout size={18} />,
    title: "Yield Estimation",
  },
};

export const NoIcon: Story = {
  name: "Without icon",
  args: {
    title: "Field name",
    info: "Soybean · 120 ha",
  },
};

export const ListExample: Story = {
  name: "List of items",
  render: () => (
    <>
      <ListItem icon={<Scout size={18} />} title="Planting Quality" info="1 item to inspect" />
      <ListItem icon={<Scout size={18} />} title="Plant Stand" info="1 item to inspect" />
      <ListItem icon={<Scout size={18} />} title="Nutrition" info="10 items to inspect" />
      <ListItem icon={<Scout size={18} />} title="Pest, disease, and weed" info="50 items to inspect" />
      <ListItem icon={<Scout size={18} />} title="Yield Estimation" info="1 item to inspect" />
      <ListItem icon={<Scout size={18} />} title="Harvest Losses" info="1 item to inspect" />
    </>
  ),
};
