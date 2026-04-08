import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "../src/components/list-item/ListItem";
import { ListItemRecent } from "../src/components/list-item/ListItemRecent";
import CropFree from "../src/icons/design/CropFree";
import InsertPhoto from "../src/icons/design/InsertPhoto";
import Assignment from "../src/icons/design/Assignment";

// ─── ListItem ──────────────────────────────────────────────────────────────────

const listItemMeta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    info: { control: "text" },
    checked: { control: "boolean" },
    iconBgColor: { control: "color" },
    iconColor: { control: "color" },
  },
};

export default listItemMeta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    title: "Corn",
    info: "130 ac • DAE: 45",
    icon: <CropFree size={24} />,
  },
};

export const Checked: Story = {
  args: {
    title: "Soybean",
    info: "80 ac • DAE: 30",
    icon: <CropFree size={24} />,
    checked: true,
  },
};

export const NoInfo: Story = {
  args: {
    title: "Wheat",
    icon: <Assignment size={24} />,
  },
};

export const List: Story = {
  render: () => (
    <div style={{ width: "360px" }}>
      <ListItem title="Corn"    info="130 ac • DAE: 45" icon={<CropFree size={24} />} checked />
      <ListItem title="Soybean" info="80 ac • DAE: 30"  icon={<CropFree size={24} />} />
      <ListItem title="Wheat"   info="200 ac • DAE: 12" icon={<CropFree size={24} />} />
    </div>
  ),
};

// ─── ListItemRecent ────────────────────────────────────────────────────────────

export const Recent: StoryObj<typeof ListItemRecent> = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <ListItemRecent
        title="Corn"
        info="130 ac • DAE: 45"
        icon={<CropFree size={24} />}
        checked
      />
      <ListItemRecent
        title="Soybean"
        info="80 ac • DAE: 30"
        icon={<InsertPhoto size={24} />}
      />
    </div>
  ),
};
