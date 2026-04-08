import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../src/components/tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left", "top-middle", "top-right",
        "bottom-left", "bottom-middle", "bottom-right",
        "left-top", "left-middle", "left-bottom",
        "right-top", "right-middle", "right-bottom",
      ],
    },
    colour: { control: "radio", options: ["dark", "light"] },
    arrow: { control: "boolean" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    position: "top-left",
    colour: "dark",
    arrow: true,
  },
};

export const AllPositions: Story = {
  render: () => {
    const positions = [
      "top-left", "top-middle", "top-right",
      "bottom-left", "bottom-middle", "bottom-right",
      "left-top", "left-middle", "left-bottom",
      "right-top", "right-middle", "right-bottom",
    ] as const;

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "16px" }}>
        {positions.map((position) => (
          <div key={position} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>{position}</span>
            <Tooltip text="Tooltip text" position={position} />
          </div>
        ))}
      </div>
    );
  },
};

export const Colours: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>Dark</span>
        <Tooltip text="Dark tooltip" colour="dark" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>Light</span>
        <Tooltip text="Light tooltip" colour="light" />
      </div>
    </div>
  ),
};

export const NoArrow: Story = {
  args: {
    text: "No arrow tooltip",
    arrow: false,
  },
};
