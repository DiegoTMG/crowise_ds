import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StatusBar } from "./StatusBar";

const meta: Meta<typeof StatusBar> = {
  title: "Design System/Status Bar",
  component: StatusBar,
  tags: ["autodocs"],
  argTypes: {
    platform: { control: "radio", options: ["ios", "android"] },
    mode:     { control: "radio", options: ["light", "dark"] },
    layout:   { control: "radio", options: ["notch", "no-notch"] },
    time:     { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const IosNotchLight: Story = {
  name: "iOS · Notch · Light",
  args: { platform: "ios", mode: "light", layout: "notch", time: "9:41" },
};

export const IosNotchDark: Story = {
  name: "iOS · Notch · Dark",
  args: { platform: "ios", mode: "dark", layout: "notch", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};

export const IosNoNotchLight: Story = {
  name: "iOS · No Notch · Light",
  args: { platform: "ios", mode: "light", layout: "no-notch", time: "9:41" },
};

export const IosNoNotchDark: Story = {
  name: "iOS · No Notch · Dark",
  args: { platform: "ios", mode: "dark", layout: "no-notch", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};

export const AndroidLight: Story = {
  name: "Android · Light",
  args: { platform: "android", mode: "light", time: "9:41" },
};

export const AndroidDark: Story = {
  name: "Android · Dark",
  args: { platform: "android", mode: "dark", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};
