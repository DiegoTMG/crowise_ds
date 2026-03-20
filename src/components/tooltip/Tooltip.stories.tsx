import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Design System/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-middle",
        "top-right",
        "bottom-left",
        "bottom-middle",
        "bottom-right",
        "left-top",
        "left-middle",
        "left-bottom",
        "right-top",
        "right-middle",
        "right-bottom",
      ],
    },
    colour: { control: "select", options: ["dark", "light"] },
    arrow: { control: "boolean" },
    text: { control: "text" },
  },
  decorators: [
    (StoryFn) => (
      <div style={{ padding: "40px" }}>
        <StoryFn />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DarkTopLeft: Story = {
  name: "Dark / Top Left / Arrow",
  args: { text: "Tooltip text", position: "top-left", colour: "dark", arrow: true },
};

export const DarkTopMiddle: Story = {
  name: "Dark / Top Middle / Arrow",
  args: { text: "Tooltip text", position: "top-middle", colour: "dark", arrow: true },
};

export const DarkTopRight: Story = {
  name: "Dark / Top Right / Arrow",
  args: { text: "Tooltip text", position: "top-right", colour: "dark", arrow: true },
};

export const DarkBottomLeft: Story = {
  name: "Dark / Bottom Left / Arrow",
  args: { text: "Tooltip text", position: "bottom-left", colour: "dark", arrow: true },
};

export const DarkBottomMiddle: Story = {
  name: "Dark / Bottom Middle / Arrow",
  args: { text: "Tooltip text", position: "bottom-middle", colour: "dark", arrow: true },
};

export const DarkBottomRight: Story = {
  name: "Dark / Bottom Right / Arrow",
  args: { text: "Tooltip text", position: "bottom-right", colour: "dark", arrow: true },
};

export const DarkLeftTop: Story = {
  name: "Dark / Left Top / Arrow",
  args: { text: "Tooltip text", position: "left-top", colour: "dark", arrow: true },
};

export const DarkLeftMiddle: Story = {
  name: "Dark / Left Middle / Arrow",
  args: { text: "Tooltip text", position: "left-middle", colour: "dark", arrow: true },
};

export const DarkLeftBottom: Story = {
  name: "Dark / Left Bottom / Arrow",
  args: { text: "Tooltip text", position: "left-bottom", colour: "dark", arrow: true },
};

export const DarkRightTop: Story = {
  name: "Dark / Right Top / Arrow",
  args: { text: "Tooltip text", position: "right-top", colour: "dark", arrow: true },
};

export const DarkRightMiddle: Story = {
  name: "Dark / Right Middle / Arrow",
  args: { text: "Tooltip text", position: "right-middle", colour: "dark", arrow: true },
};

export const DarkRightBottom: Story = {
  name: "Dark / Right Bottom / Arrow",
  args: { text: "Tooltip text", position: "right-bottom", colour: "dark", arrow: true },
};

export const LightTopLeft: Story = {
  name: "Light / Top Left / Arrow",
  args: { text: "Tooltip text", position: "top-left", colour: "light", arrow: true },
};

export const LightBottomLeft: Story = {
  name: "Light / Bottom Left / Arrow",
  args: { text: "Tooltip text", position: "bottom-left", colour: "light", arrow: true },
};

export const LightLeftMiddle: Story = {
  name: "Light / Left Middle / Arrow",
  args: { text: "Tooltip text", position: "left-middle", colour: "light", arrow: true },
};

export const LightRightMiddle: Story = {
  name: "Light / Right Middle / Arrow",
  args: { text: "Tooltip text", position: "right-middle", colour: "light", arrow: true },
};

export const DarkNoArrow: Story = {
  name: "Dark / No Arrow",
  args: { text: "Tooltip text", position: "top-right", colour: "dark", arrow: false },
};

export const LightNoArrow: Story = {
  name: "Light / No Arrow",
  args: { text: "Tooltip text", position: "top-left", colour: "light", arrow: false },
};

export const LongText: Story = {
  name: "Long Text (max-width 400px)",
  args: {
    text: "Toolltip component can grow horizontally and vertically according to needs. It is not recommended to exceed a horizontal length of 400",
    position: "top-left",
    colour: "dark",
    arrow: true,
  },
};
