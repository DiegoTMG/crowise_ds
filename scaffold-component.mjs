#!/usr/bin/env node
/**
 * scaffold-component.mjs
 *
 * DS-Enforcer Scaffold Tool — creates component folders and DS-compliant
 * starter files for new Figma components.
 *
 * Usage:
 *   node scaffold-component.mjs "<Component Name>" [android] [ios] [web] [rn]
 *
 * Examples:
 *   node scaffold-component.mjs "Navbar Menu" android ios
 *   node scaffold-component.mjs "Card" web rn
 *   node scaffold-component.mjs "Status Badge" android ios web rn
 *
 * Scaffold protocol:
 *   1. Normalises component name to kebab-case (folders) and PascalCase (symbols).
 *   2. Creates: src/components/<kebab-name>/<platform>/<PascalName><Platform>.tsx
 *   3. Creates: src/components/<kebab-name>/<PascalName>.tsx  (main orchestrator)
 *   4. Creates: src/components/<kebab-name>/index.ts          (barrel exports)
 *
 * Design System rules enforced:
 *   - Only semantic tokens from theme.css (no raw hex values).
 *   - Noto Sans via var(--font-family-primary) — no manual font declarations.
 *   - Auto Layout via flexbox; no absolute positioning in main layout.
 *   - No .md files; no local style overrides.
 *   - Icons must come from @icons-library/cropwise@1.2.0 (annotated in stubs).
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Supported platforms ──────────────────────────────────────────────────────

const SUPPORTED_PLATFORMS = ["android", "ios", "web", "rn"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toKebabCase(str) {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}

function toPascalCase(str) {
  return str
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function platformLabel(platform) {
  const map = { android: "Android", ios: "Ios", web: "Web", rn: "ReactNative" };
  return map[platform] ?? toPascalCase(platform);
}

function writeFileSafe(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.warn(`  ⚠  Skipping (already exists): ${filePath}`);
    return false;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  ✅  Created: ${filePath}`);
  return true;
}

// ─── Template generators ──────────────────────────────────────────────────────

/**
 * Android platform stub — React TSX representing the Android design.
 *
 * ANDROID_TECH: Jetpack Compose (Kotlin) with DS tokens.
 * This React TSX file is the Figma Code Connect representation.
 * The native Kotlin/Compose implementation must be authored separately,
 * mapping the same DS semantic token names to their Android equivalents.
 */
function androidTemplate(pascal, kebab) {
  const componentName = `${pascal}Android`;
  return `import React from "react";

// ─── Platform / Android ───────────────────────────────────────────────────────
// React representation of the Android (Jetpack Compose) design.
// Native Kotlin implementation: map DS tokens below to Compose MaterialTheme
// color/typography equivalents or custom CompositionLocal providers.
//
// DS token reference: src/theme/theme.css
// Icon library:       @icons-library/cropwise@1.2.0

export interface ${componentName}Props {
  /** Color scheme — 'light' | 'dark' */
  mode?: "light" | "dark";
  className?: string;
}

export function ${componentName}({
  mode = "light",
  className = "",
}: ${componentName}Props) {
  const isDark = mode === "dark";

  return (
    // Auto Layout — flexbox column, DS spacing tokens
    <div
      className={className}
      data-name="${pascal}/Android"
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "flex-start",
        gap:           "8px",                         // DS spacing unit
        padding:       "16px",
        background:    isDark
          ? "var(--fill-default-none-secondary)"      // dark surface token
          : "var(--fill-default-none-primary)",       // light surface token
      }}
    >
      {/* ── Implement ${pascal} content here ─────────────────────────────── */}
      {/* Use only semantic tokens from theme.css — no raw hex values.        */}
      {/* Typography: var(--font-family-primary) (Noto Sans), predefined      */}
      {/*   text styles only — do not set font-size/weight/line-height here.  */}
      {/* Icons: import from @icons-library/cropwise@1.2.0 at 24×24 or       */}
      {/*   18×18 px — never draw new icons.                                  */}
      <p
        style={{
          fontFamily:    "var(--font-family-primary)",
          fontSize:      "16px",           // Button/Label style
          fontWeight:    400,
          lineHeight:    "24px",
          letterSpacing: "-0.12px",
          color:         "var(--text-default-enabled-primary)",
          margin:        0,
        }}
      >
        {/* TODO: replace with actual ${pascal} content */}
        ${pascal} — Android
      </p>
    </div>
  );
}

export default ${componentName};
`;
}

/**
 * iOS platform stub — React TSX representing the iOS design.
 *
 * IOS_TECH: SwiftUI with DS tokens.
 * This React TSX file is the Figma Code Connect representation.
 * The native Swift implementation must be authored separately,
 * mapping DS semantic token names to SwiftUI Color/Font extensions.
 */
function iosTemplate(pascal, kebab) {
  const componentName = `${pascal}Ios`;
  return `import React from "react";

// ─── Platform / iOS ───────────────────────────────────────────────────────────
// React representation of the iOS (SwiftUI) design.
// Native Swift implementation: map DS tokens below to SwiftUI Color extensions
// or custom EnvironmentValues — never use raw hex values.
//
// DS token reference: src/theme/theme.css
// Icon library:       @icons-library/cropwise@1.2.0

export interface ${componentName}Props {
  /** Color scheme — 'light' | 'dark' */
  mode?: "light" | "dark";
  className?: string;
}

export function ${componentName}({
  mode = "light",
  className = "",
}: ${componentName}Props) {
  const isDark = mode === "dark";

  return (
    // Auto Layout — flexbox column, DS spacing tokens
    <div
      className={className}
      data-name="${pascal}/iOS"
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "flex-start",
        gap:           "8px",                         // DS spacing unit
        padding:       "16px",
        background:    isDark
          ? "var(--fill-default-none-secondary)"      // dark surface token
          : "var(--fill-default-none-primary)",       // light surface token
      }}
    >
      {/* ── Implement ${pascal} content here ─────────────────────────────── */}
      {/* Use only semantic tokens from theme.css — no raw hex values.        */}
      {/* Typography: var(--font-family-primary) (Noto Sans), predefined      */}
      {/*   text styles only — do not set font-size/weight/line-height here.  */}
      {/* Icons: import from @icons-library/cropwise@1.2.0 at 24×24 or       */}
      {/*   18×18 px — never draw new icons.                                  */}
      <p
        style={{
          fontFamily:    "var(--font-family-primary)",
          fontSize:      "16px",           // Button/Label style
          fontWeight:    400,
          lineHeight:    "24px",
          letterSpacing: "-0.12px",
          color:         "var(--text-default-enabled-primary)",
          margin:        0,
        }}
      >
        {/* TODO: replace with actual ${pascal} content */}
        ${pascal} — iOS
      </p>
    </div>
  );
}

export default ${componentName};
`;
}

/**
 * Web platform stub — React + TypeScript component.
 *
 * WEB_TECH: React + TypeScript with DS tokens from theme.css
 *           and icons from @icons-library/cropwise@1.2.0.
 */
function webTemplate(pascal, kebab) {
  const componentName = `${pascal}Web`;
  return `import React from "react";

// ─── Platform / Web ───────────────────────────────────────────────────────────
// React + TypeScript implementation using DS tokens from theme.css.
// Icons: import from @icons-library/cropwise@1.2.0
//
// DS token reference: src/theme/theme.css

export interface ${componentName}Props {
  className?: string;
}

export function ${componentName}({
  className = "",
}: ${componentName}Props) {
  return (
    // Auto Layout — flexbox, DS spacing tokens
    <div
      className={className}
      data-name="${pascal}/Web"
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "flex-start",
        gap:           "8px",                           // DS spacing unit
        padding:       "16px",
        background:    "var(--fill-default-none-primary)",
      }}
    >
      {/* ── Implement ${pascal} content here ─────────────────────────────── */}
      {/* Use only semantic tokens from theme.css — no raw hex values.        */}
      {/* Typography: var(--font-family-primary) (Noto Sans), predefined      */}
      {/*   text styles only — do not set font-size/weight/line-height here.  */}
      {/* Icons: import from @icons-library/cropwise@1.2.0 at 24×24 or       */}
      {/*   18×18 px — never draw new icons.                                  */}
      <p
        style={{
          fontFamily:    "var(--font-family-primary)",
          fontSize:      "16px",           // Button/Label style
          fontWeight:    400,
          lineHeight:    "24px",
          letterSpacing: "-0.12px",
          color:         "var(--text-default-enabled-primary)",
          margin:        0,
        }}
      >
        {/* TODO: replace with actual ${pascal} content */}
        ${pascal} — Web
      </p>
    </div>
  );
}

export default ${componentName};
`;
}

/**
 * React Native platform stub.
 *
 * RN_TECH: React Native + TypeScript with DS tokens and the same icon library
 *          if available; otherwise use the approved icon bridge.
 *          Never invent a new icon set.
 */
function rnTemplate(pascal, kebab) {
  const componentName = `${pascal}ReactNative`;
  return `import React from "react";
// NOTE: In a React Native project replace the import below with:
//   import { View, Text, StyleSheet } from "react-native";
// and map DS tokens to StyleSheet values via your theme bridge.
// Icons: use @icons-library/cropwise@1.2.0 via the approved React Native
//   icon bridge — never invent a new icon set.

// ─── Platform / React Native ──────────────────────────────────────────────────
// RN implementation using DS tokens.
// Map var(--token-name) values to your theme bridge (e.g., useTheme() or a
// tokens object) — never hardcode raw hex values.
//
// DS token reference: src/theme/theme.css

export interface ${componentName}Props {
  /** Color scheme — 'light' | 'dark' */
  mode?: "light" | "dark";
}

export function ${componentName}({
  mode = "light",
}: ${componentName}Props) {
  // TODO: replace with React Native <View> / <Text> + StyleSheet
  // using your DS token bridge (e.g., dsTokens.fillDefaultNonePrimary).
  return (
    <div
      data-name="${pascal}/ReactNative"
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "flex-start",
        gap:           "8px",
        padding:       "16px",
        background:    mode === "dark"
          ? "var(--fill-default-none-secondary)"
          : "var(--fill-default-none-primary)",
      }}
    >
      {/* ── Implement ${pascal} content here ─────────────────────────────── */}
      <p
        style={{
          fontFamily:    "var(--font-family-primary)",
          fontSize:      "16px",
          fontWeight:    400,
          lineHeight:    "24px",
          letterSpacing: "-0.12px",
          color:         "var(--text-default-enabled-primary)",
          margin:        0,
        }}
      >
        {/* TODO: replace with actual ${pascal} content */}
        ${pascal} — React Native
      </p>
    </div>
  );
}

export default ${componentName};
`;
}

/**
 * Main orchestrator component — delegates to the requested platform stubs.
 */
function orchestratorTemplate(pascal, kebab, platforms) {
  const imports = platforms
    .map(p => {
      const label = platformLabel(p);
      return `import { ${pascal}${label} } from "./${p}/${pascal}${label}";`;
    })
    .join("\n");

  const platformType = platforms.map(p => `"${p}"`).join(" | ");

  const switchCases = platforms
    .map(p => {
      const label = platformLabel(p);
      return `  if (platform === "${p}") return <${pascal}${label} mode={mode} className={className} />;`;
    })
    .join("\n");

  const platformPropComment = platforms.length > 1
    ? `  /** Target platform — ${platformType} */\n  platform?: ${platformType};`
    : `  platform?: ${platformType};`;

  return `import React from "react";

${imports}

// ─── ${pascal} — Main Orchestrator ──────────────────────────────────────────
// Delegates rendering to the correct platform implementation.
// Add variants here as Figma designs are delivered.

export interface ${pascal}Props {
${platformPropComment}
  /** Color scheme — 'light' | 'dark' */
  mode?: "light" | "dark";
  /** Additional CSS class names */
  className?: string;
}

/**
 * ${pascal}
 *
 * Variants
 *   platform : ${platformType}
 *   mode     : 'light' | 'dark'
 */
export function ${pascal}({
  platform = "${platforms[0]}",
  mode = "light",
  className = "",
}: ${pascal}Props) {
${switchCases}
  return null;
}

export default ${pascal};
`;
}

/**
 * Barrel index.ts for the component directory.
 */
function indexTemplate(pascal, platforms) {
  const platformExports = platforms
    .map(p => {
      const label = platformLabel(p);
      return `export { ${pascal}${label} } from "./${p}/${pascal}${label}";`;
    })
    .join("\n");

  return `export { ${pascal} } from "./${pascal}";
export type { ${pascal}Props } from "./${pascal}";

${platformExports}
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    console.log(`
Usage:
  node scaffold-component.mjs "<Component Name>" [android] [ios] [web] [rn]

Examples:
  node scaffold-component.mjs "Navbar Menu" android ios
  node scaffold-component.mjs "Card" web rn
  node scaffold-component.mjs "Status Badge" android ios web rn

Supported platforms: ${SUPPORTED_PLATFORMS.join(", ")}
`);
    process.exit(0);
  }

  const rawName  = args[0];
  const rawPlatforms = args.slice(1).map(p => p.toLowerCase());

  // Validate component name
  if (!rawName || rawName.trim().length === 0) {
    console.error("Error: component name is required.");
    process.exit(1);
  }

  // Validate and deduplicate platforms
  const platforms = rawPlatforms.length > 0 ? rawPlatforms : ["android", "ios"];
  const invalid   = platforms.filter(p => !SUPPORTED_PLATFORMS.includes(p));
  if (invalid.length > 0) {
    console.error(`Error: unsupported platform(s): ${invalid.join(", ")}`);
    console.error(`Supported platforms: ${SUPPORTED_PLATFORMS.join(", ")}`);
    process.exit(1);
  }
  const uniquePlatforms = [...new Set(platforms)];

  const kebab  = toKebabCase(rawName);
  const pascal = toPascalCase(rawName);

  console.log(`\n🚀  Scaffolding component "${rawName}"`);
  console.log(`   Kebab : ${kebab}`);
  console.log(`   Pascal: ${pascal}`);
  console.log(`   Platforms: ${uniquePlatforms.join(", ")}\n`);

  const compDir = path.join(__dirname, "src", "components", kebab);

  // ── 1. Platform files ──────────────────────────────────────────────────────
  for (const platform of uniquePlatforms) {
    const label    = platformLabel(platform);
    const fileName = `${pascal}${label}.tsx`;
    const filePath = path.join(compDir, platform, fileName);

    let content;
    if (platform === "android") content = androidTemplate(pascal, kebab);
    else if (platform === "ios") content = iosTemplate(pascal, kebab);
    else if (platform === "web") content = webTemplate(pascal, kebab);
    else                         content = rnTemplate(pascal, kebab);

    writeFileSafe(filePath, content);
  }

  // ── 2. Main orchestrator ───────────────────────────────────────────────────
  writeFileSafe(
    path.join(compDir, `${pascal}.tsx`),
    orchestratorTemplate(pascal, kebab, uniquePlatforms),
  );

  // ── 3. Barrel index.ts ─────────────────────────────────────────────────────
  writeFileSafe(
    path.join(compDir, "index.ts"),
    indexTemplate(pascal, uniquePlatforms),
  );

  console.log(`\n✅  Scaffold complete.`);
  console.log(`   Directory: src/components/${kebab}/`);
  console.log(`\n   Next steps:`);
  console.log(`   1. Add content to each platform stub — use semantic tokens only.`);
  console.log(`   2. Export from src/components/index.ts:`);
  console.log(`      export * from "./${kebab}";`);
  console.log(`   3. Publish to the DS Library (no detached or isolated instances).\n`);
}

main();
