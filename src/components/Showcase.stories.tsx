import React, { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// ─── Button Atoms (correct export name per file) ────────────────────────────
import { ButtonAtom as PrimaryRoundAtom } from "./buttons/PrimaryRound";
import { IconOnlyCircleAtom } from "./buttons/PrimaryIconOnlyCircle";
import { IconOnlySquareAtom } from "./buttons/PrimaryIconOnlySquare";
import { SplitButtonAtom as PrimarySplitRoundAtom } from "./buttons/PrimarySplitRound";
import { SecondaryRoundAtom } from "./buttons/SecondaryStandardRound";
import { SecondarySquareAtom } from "./buttons/SecondaryStandardSquare";
import { SecondaryIconOnlyCircleAtom } from "./buttons/SecondaryIconOnlyCircle";
import { SecondaryIconOnlySquareAtom } from "./buttons/SecondaryIconOnlySquare";
import { SecondarySplitSquareAtom } from "./buttons/SecondarySplitSquare";
import { TertiaryStandardRoundAtom } from "./buttons/TertiaryStandardRound";
import { TertiaryStandardSquareAtom } from "./buttons/TertiaryStandardSquare";
import { TertiaryIconOnlyRoundAtom } from "./buttons/TertiaryIconOnlyRound";
import { TertiaryIconOnlySquareAtom } from "./buttons/TertiaryIconOnlySquare";
import { TertiarySplitSquareAtom } from "./buttons/TertiarySplitSquare";
import { TertiaryAddAnotherAtom } from "./buttons/TertiaryAddAnother";
import { TertiaryTextLinkAtom } from "./buttons/TertiaryTextLink";
import { TertiaryVerticalAtom } from "./buttons/TertiaryVertical";
import { GhostStandard } from "./buttons/GhostStandard";
import { DestructiveStandard } from "./buttons/DestructiveStandard";
import { Spinner } from "./Spinner";
import { StatusBar } from "./status-bar/StatusBar";
import { SwitchMenu } from "./switch-menu/SwitchMenu";
import { Tooltip } from "./tooltip/Tooltip";
import { CategoryDivider } from "./category-divider/CategoryDivider";
import { SearchButton } from "./search-button/SearchButton";

// ─── Icons (namespace imports) ───────────────────────────────────────────────
import * as CropIcons from "../icons/crop";
import * as DesignIcons from "../icons/design";
import * as FeatureIcons from "../icons/feature";

// ─── Types ───────────────────────────────────────────────────────────────────
type Category =
  | "all"
  | "buttons"
  | "status-bar"
  | "spinner"
  | "other"
  | "crop-icons"
  | "design-icons"
  | "feature-icons";

interface CardItem {
  name: string;
  category: Category;
  subcategory?: string;
  description: string;
  render: () => React.ReactNode;
}

// ─── Build icon cards from namespace imports ─────────────────────────────────
const buildIconCards = (
  icons: Record<string, any>,
  category: Category,
  label: string
): CardItem[] =>
  Object.entries(icons)
    .filter(([key, val]) => key !== "default" && typeof val === "function")
    .map(([name, Icon]) => ({
      name,
      category,
      subcategory: label,
      description: `${label} icon`,
      render: () => (
        <Icon size={24} style={{ color: "var(--icon-default-none-primary)" }} />
      ),
    }));

// ─── Component cards ─────────────────────────────────────────────────────────
const componentCards: CardItem[] = [
  // Primary
  { name: "PrimaryRound", category: "buttons", subcategory: "Primary", description: "Standard primary rounded button", render: () => <PrimaryRoundAtom label="Button" /> },
  { name: "PrimaryIconOnlyCircle", category: "buttons", subcategory: "Primary", description: "Icon-only circular primary button", render: () => <IconOnlyCircleAtom /> },
  { name: "PrimaryIconOnlySquare", category: "buttons", subcategory: "Primary", description: "Icon-only square primary button", render: () => <IconOnlySquareAtom /> },
  { name: "PrimarySplitRound", category: "buttons", subcategory: "Primary", description: "Split action primary rounded button", render: () => <PrimarySplitRoundAtom label="Button" /> },
  // Secondary
  { name: "SecondaryStandardRound", category: "buttons", subcategory: "Secondary", description: "Standard secondary rounded button", render: () => <SecondaryRoundAtom label="Button" /> },
  { name: "SecondaryStandardSquare", category: "buttons", subcategory: "Secondary", description: "Standard secondary square button", render: () => <SecondarySquareAtom label="Button" /> },
  { name: "SecondaryIconOnlyCircle", category: "buttons", subcategory: "Secondary", description: "Icon-only circular secondary button", render: () => <SecondaryIconOnlyCircleAtom /> },
  { name: "SecondaryIconOnlySquare", category: "buttons", subcategory: "Secondary", description: "Icon-only square secondary button", render: () => <SecondaryIconOnlySquareAtom /> },
  { name: "SecondarySplitSquare", category: "buttons", subcategory: "Secondary", description: "Split action secondary square button", render: () => <SecondarySplitSquareAtom label="Button" /> },
  // Tertiary
  { name: "TertiaryStandardRound", category: "buttons", subcategory: "Tertiary", description: "Standard tertiary rounded button", render: () => <TertiaryStandardRoundAtom label="Button" /> },
  { name: "TertiaryStandardSquare", category: "buttons", subcategory: "Tertiary", description: "Standard tertiary square button", render: () => <TertiaryStandardSquareAtom label="Button" /> },
  { name: "TertiaryIconOnlyRound", category: "buttons", subcategory: "Tertiary", description: "Icon-only rounded tertiary button", render: () => <TertiaryIconOnlyRoundAtom /> },
  { name: "TertiaryIconOnlySquare", category: "buttons", subcategory: "Tertiary", description: "Icon-only square tertiary button", render: () => <TertiaryIconOnlySquareAtom /> },
  { name: "TertiarySplitSquare", category: "buttons", subcategory: "Tertiary", description: "Split action tertiary square button", render: () => <TertiarySplitSquareAtom label="Button" /> },
  { name: "TertiaryAddAnother", category: "buttons", subcategory: "Tertiary", description: "Add another item tertiary button", render: () => <TertiaryAddAnotherAtom label="Button" /> },
  { name: "TertiaryTextLink", category: "buttons", subcategory: "Tertiary", description: "Text link style tertiary button", render: () => <TertiaryTextLinkAtom label="Button" /> },
  { name: "TertiaryVertical", category: "buttons", subcategory: "Tertiary", description: "Vertically stacked tertiary button", render: () => <TertiaryVerticalAtom label="Button" /> },
  // Ghost & Destructive
  { name: "GhostStandard", category: "buttons", subcategory: "Ghost", description: "Ghost standard button", render: () => <GhostStandard label="Button" /> },
  { name: "DestructiveStandard", category: "buttons", subcategory: "Destructive", description: "Destructive standard button", render: () => <DestructiveStandard label="Button" /> },
  // Other components
  { name: "Spinner", category: "spinner", description: "Loading spinner component", render: () => <Spinner size={36} /> },
  { name: "StatusBar", category: "status-bar", description: "iOS status bar", render: () => <StatusBar platform="ios" /> },
  { name: "SwitchMenu", category: "other", description: "Tab switch menu component", render: () => <SwitchMenu mode="not-scouted" activeTab="all" /> },
  { name: "Tooltip", category: "other", description: "Tooltip component", render: () => <div style={{ padding: 20 }}><Tooltip text="Tooltip text" position="top-middle" colour="dark" arrow /></div> },
  { name: "CategoryDivider", category: "other", description: "Category section divider", render: () => <CategoryDivider label="Category" /> },
  { name: "SearchButton", category: "other", description: "Search trigger button", render: () => <SearchButton /> },
];

const cropIconCards = buildIconCards(CropIcons, "crop-icons", "Crop");
const designIconCards = buildIconCards(DesignIcons, "design-icons", "Design");
const featureIconCards = buildIconCards(FeatureIcons, "feature-icons", "Feature");

const ALL_ITEMS: CardItem[] = [
  ...componentCards,
  ...cropIconCards,
  ...designIconCards,
  ...featureIconCards,
];

// ─── Category labels & descriptions ─────────────────────────────────────────
const CATEGORIES: Category[] = [
  "all",
  "buttons",
  "status-bar",
  "spinner",
  "other",
  "crop-icons",
  "design-icons",
  "feature-icons",
];

const CATEGORY_LABELS: Record<Category, string> = {
  all: "All",
  buttons: "Buttons",
  "status-bar": "Status Bar",
  spinner: "Spinner",
  other: "Other",
  "crop-icons": "Crop Icons",
  "design-icons": "Design Icons",
  "feature-icons": "Feature Icons",
};

const CATEGORY_DESCRIPTIONS: Partial<Record<Category, string>> = {
  buttons:
    "Interactive button components with Primary, Secondary, Tertiary, Ghost and Destructive variants. Support states: default, hover, focus, pressed, disabled, loading.",
  "status-bar": "Device status bar components for iOS and Android.",
  spinner: "Loading spinner component with 18px, 36px and 72px sizes.",
  other: "Additional UI components: SwitchMenu, Tooltip, CategoryDivider, SearchButton.",
  "crop-icons": "Agricultural crop icon set for field identification.",
  "design-icons": "General UI design icons for interface actions.",
  "feature-icons": "Feature-specific icons for Cropwise product features.",
};

// ─── Showcase component ──────────────────────────────────────────────────────
const Showcase = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const totalComponents = componentCards.length;
  const totalIcons =
    cropIconCards.length + designIconCards.length + featureIconCards.length;
  const totalExports = totalComponents + totalIcons;
  const totalCategories = CATEGORIES.length - 1;

  const filtered = useMemo(() => {
    let items =
      activeCategory === "all"
        ? ALL_ITEMS
        : ALL_ITEMS.filter((i) => i.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          (i.subcategory ?? "").toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<Category, CardItem[]>();
    for (const item of filtered) {
      if (!map.has(item.category)) map.set(item.category, []);
      map.get(item.category)!.push(item);
    }
    return map;
  }, [filtered]);

  return (
    <div
      style={{
        fontFamily: "var(--font-family-body)",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px 16px",
      }}
    >
      {/* ── Stats row ─────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {[
          { n: totalExports, label: "Total Exports" },
          { n: totalComponents, label: "Components" },
          { n: totalIcons, label: "Icons" },
          { n: totalCategories, label: "Categories" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--fill-default-none-primary)",
              border: "1px solid var(--border-default-none-secondary)",
              borderRadius: 8,
              padding: "16px 20px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "var(--font-size-heading)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--line-height-heading)",
                color: "var(--fill-default-enabled-primary)",
                margin: 0,
              }}
            >
              {s.n}
            </p>
            <p
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: "var(--font-size-label)",
                lineHeight: "var(--line-height-label)",
                letterSpacing: "0.5px",
                color: "var(--text-default-none-secondary)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Search + filter pills ─────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 24,
        }}
      >
        <input
          style={{
            flex: "1 1 280px",
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid var(--border-default-none-secondary)",
            background: "var(--fill-default-none-primary)",
            fontFamily: "var(--font-family-body)",
            fontSize: "var(--font-size-body-secondary)",
            lineHeight: "var(--line-height-body-secondary)",
            color: "var(--text-default-none-primary)",
            outline: "none",
          }}
          placeholder="Search components and icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "6px 16px",
                borderRadius: 100,
                border: active
                  ? "none"
                  : "1px solid var(--border-default-none-secondary)",
                cursor: "pointer",
                fontFamily: "var(--font-family-body)",
                fontSize: "var(--font-size-label)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--line-height-label)",
                background: active
                  ? "var(--fill-default-enabled-primary)"
                  : "var(--fill-default-none-primary)",
                color: active
                  ? "var(--text-default-enabled-primary)"
                  : "var(--text-default-none-primary)",
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          );
        })}
      </div>

      {/* ── Grouped sections ──────────────────────────────────────── */}
      {Array.from(grouped.entries()).map(([cat, items]) => (
        <div key={cat} style={{ marginBottom: 32 }}>
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "var(--font-size-subheading)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--line-height-subheading)",
                color: "var(--text-default-none-primary)",
                margin: 0,
              }}
            >
              {CATEGORY_LABELS[cat]}
            </h2>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--fill-default-enabled-primary)",
                color: "var(--text-default-enabled-primary)",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 600,
                minWidth: 22,
                height: 22,
                padding: "0 6px",
              }}
            >
              {items.length}
            </span>
          </div>
          {CATEGORY_DESCRIPTIONS[cat] && (
            <p
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: "var(--font-size-body-secondary)",
                lineHeight: "var(--line-height-body-secondary)",
                color: "var(--text-default-none-secondary)",
                margin: "0 0 16px",
              }}
            >
              {CATEGORY_DESCRIPTIONS[cat]}
            </p>
          )}

          {/* Card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {items.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "var(--fill-default-none-primary)",
                  border: "1px solid var(--border-default-none-secondary)",
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* Preview */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 56,
                  }}
                >
                  {item.render()}
                </div>
                {/* Info */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-family-body)",
                      fontSize: "var(--font-size-body-secondary)",
                      fontWeight: "var(--font-weight-bold)",
                      lineHeight: "var(--line-height-body-secondary)",
                      color: "var(--text-default-none-primary)",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  {item.subcategory && (
                    <p
                      style={{
                        fontFamily: "var(--font-family-body)",
                        fontSize: "var(--font-size-label)",
                        lineHeight: "var(--line-height-label)",
                        color: "var(--text-default-none-secondary)",
                        margin: 0,
                      }}
                    >
                      {item.subcategory}
                    </p>
                  )}
                  <p
                    style={{
                      fontFamily: "var(--font-family-body)",
                      fontSize: "var(--font-size-label)",
                      lineHeight: "var(--line-height-label)",
                      color: "var(--text-default-none-secondary)",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Storybook meta ──────────────────────────────────────────────────────────
const meta: Meta = {
  title: "Design System/Showcase",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Catalog: Story = {
  name: "Component Catalog",
  render: () => <Showcase />,
};
