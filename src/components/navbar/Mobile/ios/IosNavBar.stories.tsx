import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IosNavBar } from "./IosNavBar";

const meta: Meta<typeof IosNavBar> = {
  title: "Design System/Navbar/iOS",
  component: IosNavBar,
  tags: ["autodocs"],
  argTypes: {
    mode:       { control: "radio",    options: ["light", "dark"] },
    hasNotch:   { control: "boolean" },
    displayBar: { control: "boolean" },
    searchBar:  { control: "boolean" },
    size:       { control: "radio",    options: ["default", "large"] },
    title:      { control: "text" },
    subtitle:   { control: "text" },
    time:       { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof IosNavBar>;

export const LightDefault: Story = {
  name: "Light · Default",
  args: { mode: "light", hasNotch: false, title: "My Page", time: "9:41" },
};

export const LightNotch: Story = {
  name: "Light · Notch",
  args: { mode: "light", hasNotch: true, title: "My Page", time: "9:41" },
};

export const DarkNotch: Story = {
  name: "Dark · Notch",
  args: { mode: "dark", hasNotch: true, title: "My Page", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};

export const WithDisplayBar: Story = {
  name: "Light · Notch · Display Bar",
  args: {
    mode: "light", hasNotch: true, displayBar: true,
    title: "Home", subtitle: "My Farm", time: "9:41",
  },
};

export const WithSearchBar: Story = {
  name: "Light · Notch · Search Bar",
  args: { mode: "light", hasNotch: true, searchBar: true, time: "9:41" },
};

export const LargeSize: Story = {
  name: "Light · Notch · Large",
  args: { mode: "light", hasNotch: true, size: "large", title: "My Page", time: "9:41" },
};
