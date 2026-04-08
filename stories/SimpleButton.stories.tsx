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
// Figma node 266:1169 extends full-width support to ALL shape/prominence/size/style
// combinations. The component handles this via alignment="full-width" universally.

export const FullWidth: Story = {
  render: () => {
    const proms = ["primary", "secondary", "tertiary", "quaternary"] as const;
    const shapes = ["round", "square"] as const;
    const sizes = ["medium", "small"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "400px" }}>
        {shapes.map((shape) => (
          <div key={shape}>
            <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#696F88", margin: "0 0 12px" }}>
              {shape}
            </p>
            {sizes.map((size) => (
              <div key={size} style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#868CA2", margin: "0 0 4px" }}>{size}</p>
                {proms.filter(p => !(shape === "low" && p !== "quaternary")).map((prominence) => (
                  <SimpleButton
                    key={prominence}
                    shape={shape}
                    prominence={prominence}
                    size={size}
                    alignment="full-width"
                    text={prominence.charAt(0).toUpperCase() + prominence.slice(1)}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
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

// ─── Matrix — Prominence × Shape × Size × Alignment ──────────────────────────
// Reflects both Figma nodes: 264:860 (Hug) + 266:1169 (Full-width for all)

export const Matrix: Story = {
  render: () => {
    const shapes    = ["round", "square"] as const;
    const proms     = ["primary", "secondary", "tertiary", "quaternary"] as const;
    const sizes     = ["medium", "small"] as const;
    const alignments = ["hug", "full-width"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {sizes.map((size) => (
          <div key={size}>
            <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#696F88", marginBottom: "16px" }}>
              Size — {size}
            </p>
            {shapes.map((shape) => (
              <div key={shape} style={{ marginBottom: "20px" }}>
                <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#868CA2", margin: "0 0 8px" }}>Shape — {shape}</p>
                {alignments.map((alignment) => (
                  <div key={alignment} style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "8px", width: alignment === "full-width" ? "400px" : undefined }}>
                    {proms.map((prominence) => (
                      <SimpleButton
                        key={prominence}
                        shape={shape}
                        prominence={prominence}
                        size={size}
                        alignment={alignment}
                        text={prominence.charAt(0).toUpperCase() + prominence.slice(1)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
