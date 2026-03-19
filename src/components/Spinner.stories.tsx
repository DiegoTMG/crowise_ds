import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Design System/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: [18, 36, 72] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Button: Story = {
  name: "18px — Button",
  args: { size: 18 },
};

export const Section: Story = {
  name: "36px — Section / Component",
  args: { size: 36 },
};

export const FullPage: Story = {
  name: "72px — Full-page loading",
  args: { size: 72 },
  decorators: [
    (StoryFn) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200 }}>
        <StoryFn />
      </div>
    ),
  ],
};
