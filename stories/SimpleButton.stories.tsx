import type { Meta, StoryObj } from "@storybook/react";
import { SimpleButton } from "../src/components/buttons/SimpleButton";

const meta: Meta<typeof SimpleButton> = {
  title: "Buttons/SimpleButton",
  component: SimpleButton,
  tags: ["autodocs"],
  argTypes: {
    buttonStyle: {
      control: "select",
      options: ["icon-and-text", "icon-only", "text-only"],
      description: "Maps to Figma Style prop",
    },
    shape: {
      control: "select",
      options: ["round", "square", "low"],
      description: "Maps to Figma Shape prop",
    },
    prominence: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
      description: "Maps to Figma Prominence prop",
    },
    size: {
      control: "radio",
      options: ["medium", "small"],
      description: "Maps to Figma Size prop",
    },
    alignment: {
      control: "radio",
      options: ["hug", "full-width"],
      description: "Maps to Figma Alignment prop",
    },
    text: {
      control: "text",
    },
    badgeQuantity: {
      control: "text",
      description: "Shows badge-quantity pill when provided",
    },
    badgeStatus: {
      control: "boolean",
      description: "Shows 8×8 status dot badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleButton>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    buttonStyle: "icon-and-text",
    shape: "round",
    prominence: "primary",
    size: "medium",
    alignment: "hug",
    text: "[Button]",
  },
};

// ─── All Prominences ──────────────────────────────────────────────────────────

export const AllProminences: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <SimpleButton prominence="primary"   text="Primary"   />
      <SimpleButton prominence="secondary" text="Secondary" />
      <SimpleButton prominence="tertiary"  text="Tertiary"  />
      <SimpleButton prominence="quaternary" text="Quaternary" />
    </div>
  ),
};

// ─── All Shapes ───────────────────────────────────────────────────────────────

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <SimpleButton shape="round"  text="Round"  />
      <SimpleButton shape="square" text="Square" />
      <SimpleButton shape="low"    prominence="quaternary" text="Low" />
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <SimpleButton size="medium" text="Medium" />
      <SimpleButton size="small"  text="Small"  />
    </div>
  ),
};

// ─── All Styles ───────────────────────────────────────────────────────────────

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <SimpleButton buttonStyle="icon-and-text" text="Icon and Text" />
      <SimpleButton buttonStyle="text-only"     text="Text Only"     />
      <SimpleButton buttonStyle="icon-only"                          />
    </div>
  ),
};

// ─── Full-width Alignment ─────────────────────────────────────────────────────

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <SimpleButton alignment="full-width" text="Full Width Button" />
    </div>
  ),
};

// ─── Badges ───────────────────────────────────────────────────────────────────

export const WithBadgeQuantity: Story = {
  args: {
    text: "[Button]",
    badgeQuantity: "42",
  },
};

export const WithBadgeStatus: Story = {
  args: {
    text: "[Button]",
    badgeStatus: true,
  },
};

// ─── Matrix — Prominence × Shape ─────────────────────────────────────────────

export const Matrix: Story = {
  render: () => {
    const shapes    = ["round", "square"] as const;
    const proms     = ["primary", "secondary", "tertiary", "quaternary"] as const;
    const sizes     = ["medium", "small"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {sizes.map((size) => (
          <div key={size}>
            <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#696F88", marginBottom: "12px" }}>
              Size — {size}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {shapes.map((shape) => (
                <div key={shape} style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                  {proms.map((prominence) => (
                    <SimpleButton
                      key={prominence}
                      shape={shape}
                      prominence={prominence}
                      size={size}
                      text={prominence.charAt(0).toUpperCase() + prominence.slice(1)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
