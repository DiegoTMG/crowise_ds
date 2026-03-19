import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AndroidNavBar } from "./AndroidNavBar";

const meta: Meta<typeof AndroidNavBar> = {
  title: "Design System/Navbar/Android",
  component: AndroidNavBar,
  tags: ["autodocs"],
  argTypes: {
    colour:     { control: "radio",    options: ["light", "dark"] },
    displayBar: { control: "boolean" },
    searchBar:  { control: "boolean" },
    size:       { control: "radio",    options: ["default", "large"] },
    title:      { control: "text" },
    subtitle:   { control: "text" },
    time:       { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AndroidNavBar>;

export const LightDefault: Story = {
  name: "Light · Default",
  args: { colour: "light", title: "My Page", time: "9:41" },
};

export const DarkDefault: Story = {
  name: "Dark · Default",
  args: { colour: "dark", title: "My Page", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};

export const WithDisplayBar: Story = {
  name: "Light · Display Bar",
  args: {
    colour: "light", displayBar: true,
    title: "Home", subtitle: "My Farm", time: "9:41",
  },
};

export const WithSearchBar: Story = {
  name: "Light · Search Bar",
  args: { colour: "light", searchBar: true, time: "9:41" },
};

export const LargeSize: Story = {
  name: "Light · Large",
  args: { colour: "light", size: "large", title: "My Page", time: "9:41" },
};
