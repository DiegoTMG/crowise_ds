import type { Meta, StoryObj } from "@storybook/react";
import { QuickActions } from "./QuickActions";
import type { ActionItemConfig } from "./QuickActions";
import { Apps } from "../../../icons";

const meta: Meta<typeof QuickActions> = {
  title: "Design System/Navbar/Quick Actions",
  component: QuickActions,
  parameters: { layout: "centered" },
  argTypes: {
    colour: { control: "radio", options: ["light", "dark"] },
    width: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof QuickActions>;

const defaultItems: ActionItemConfig[] = [
  { label: "Action", icon: Apps, color: "purple" },
  { label: "Action", icon: Apps, color: "red" },
  { label: "Action", icon: Apps, color: "blue" },
  { label: "Action", icon: Apps, color: "yellow" },
  { label: "Action", icon: Apps, color: "green" },
  { label: "Action", icon: Apps, color: "pink" },
];

export const LightIOS: Story = {
  args: {
    colour: "light",
    width: 375,
    items: defaultItems,
  },
};

export const DarkIOS: Story = {
  args: {
    colour: "dark",
    width: 375,
    items: defaultItems,
  },
};

export const LightAndroid: Story = {
  args: {
    colour: "light",
    width: 360,
    items: defaultItems,
  },
};

export const DarkAndroid: Story = {
  args: {
    colour: "dark",
    width: 360,
    items: defaultItems,
  },
};
