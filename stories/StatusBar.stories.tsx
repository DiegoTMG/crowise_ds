import type { Meta, StoryObj } from "@storybook/react";
import { StatusBar } from "../src/components/status-bar/StatusBar";

const meta: Meta<typeof StatusBar> = {
  title: "Components/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  argTypes: {
    platform: { control: "radio", options: ["ios", "android"] },
    mode: { control: "radio", options: ["light", "dark"] },
    layout: { control: "radio", options: ["upper", "lower"] },
    time: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const IosUpperLight: Story = {
  args: { platform: "ios", mode: "light", layout: "upper", time: "9:41" },
};

export const IosUpperDark: Story = {
  args: { platform: "ios", mode: "dark", layout: "upper", time: "9:41" },
  parameters: { backgrounds: { default: "dark" } },
};

export const IosLower: Story = {
  args: { platform: "ios", layout: "lower" },
};

export const Android: Story = {
  args: { platform: "android", mode: "light", time: "9:41" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "390px" }}>
      <StatusBar platform="ios"     mode="light" layout="upper" time="9:41" />
      <StatusBar platform="ios"     mode="light" layout="lower" />
      <div style={{ background: "#14151C", padding: "1px" }}>
        <StatusBar platform="ios"   mode="dark"  layout="upper" time="9:41" />
      </div>
      <StatusBar platform="android" mode="light" time="9:41" />
    </div>
  ),
};
