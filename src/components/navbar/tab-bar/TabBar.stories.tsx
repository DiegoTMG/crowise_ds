import type { Meta, StoryObj } from "@storybook/react";
import { TabBar, TabItemConfig } from "./TabBar";
import { Apps, Farm, Organization } from "../../../icons";
import { Add, Help, Settings, Search } from "../../../icons";

const meta: Meta<typeof TabBar> = {
  title: "Design System/Navbar/Tab Bar",
  component: TabBar,
  parameters: { layout: "centered" },
  argTypes: {
    colour: { control: "radio", options: ["light", "dark"] },
    width: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const tab = (label: string, icon: TabItemConfig["icon"], active = false): TabItemConfig => ({
  label,
  icon,
  active,
});

export const Dark2Buttons: Story = {
  args: {
    colour: "dark",
    width: 360,
    items: [
      tab("Home", Apps, true),
      tab("Settings", Settings),
    ],
  },
};

export const Dark5Buttons: Story = {
  args: {
    colour: "dark",
    width: 360,
    items: [
      tab("Home", Apps, true),
      tab("Search", Search),
      tab("Farm", Farm),
      tab("Org", Organization),
      tab("Help", Help),
    ],
  },
};

export const Light3Buttons: Story = {
  args: {
    colour: "light",
    width: 375,
    items: [
      tab("Home", Apps, true),
      tab("Search", Search),
      tab("Settings", Settings),
    ],
  },
};

export const Dark4Buttons: Story = {
  args: {
    colour: "dark",
    width: 360,
    items: [
      tab("Home", Apps, true),
      tab("Search", Search),
      tab("Farm", Farm),
      tab("Settings", Settings),
    ],
  },
};

export const LightFABPlus2: Story = {
  args: {
    colour: "light",
    width: 360,
    items: [
      tab("Home", Apps, true),
      tab("Settings", Settings),
    ],
    fab: { icon: Add },
  },
};

export const DarkFABPlus4: Story = {
  args: {
    colour: "dark",
    width: 360,
    items: [
      tab("Home", Apps, true),
      tab("Search", Search),
      tab("Farm", Farm),
      tab("Settings", Settings),
    ],
    fab: { icon: Add },
  },
};
