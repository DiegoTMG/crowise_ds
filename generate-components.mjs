import fs from 'fs';
import path from 'path';

const WORKSPACE = '/Users/diegogoncalves/Desktop/VibeCoding/Icons';
const SVG_DIR = path.join(WORKSPACE, 'svg');
const SRC_DIR = path.join(WORKSPACE, 'src');

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function cleanSvgForInline(svgContent) {
  // Extract paths and shapes from the SVG
  let svg = svgContent.trim();
  
  // Replace CSS variable fills with currentColor
  svg = svg.replace(/fill="var\(--fill-0,\s*#[0-9A-Fa-f]+\)"/g, 'fill="currentColor"');
  svg = svg.replace(/fill="var\(--fill-1,\s*#[0-9A-Fa-f]+\)"/g, 'fill="currentColor"');
  svg = svg.replace(/fill="#696F88"/g, 'fill="currentColor"');
  svg = svg.replace(/fill="#FFFFFF"/g, 'fill="white"');
  
  // Convert SVG attributes from kebab-case to camelCase for React
  svg = svg.replace(/fill-rule=/g, 'fillRule=');
  svg = svg.replace(/clip-rule=/g, 'clipRule=');
  svg = svg.replace(/fill-opacity=/g, 'fillOpacity=');
  svg = svg.replace(/stroke-width=/g, 'strokeWidth=');
  svg = svg.replace(/stroke-linecap=/g, 'strokeLinecap=');
  svg = svg.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  svg = svg.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  svg = svg.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
  svg = svg.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
  svg = svg.replace(/stop-color=/g, 'stopColor=');
  svg = svg.replace(/stop-opacity=/g, 'stopOpacity=');
  
  return svg;
}

function extractSvgInternals(svgContent) {
  // Get the viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extract inner content (between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  let inner = innerMatch ? innerMatch[1].trim() : '';
  
  // Remove wrapper <g> elements that just wrap the paths (with or without attributes)
  inner = inner.replace(/<g\s*[^>]*>\s*/g, '');
  inner = inner.replace(/\s*<\/g>/g, '');
  
  return { viewBox, inner };
}

function generateIconComponent(name, svgContent) {
  const cleaned = cleanSvgForInline(svgContent);
  const { viewBox, inner } = extractSvgInternals(cleaned);
  
  return `import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ${name}: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    {...props}
  >
    ${inner}
  </svg>
);

${name}.displayName = "${name}";
export default ${name};
`;
}

function processCategory(categoryDir, categoryName) {
  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.svg'));
  const icons = [];
  
  for (const file of files) {
    const svgPath = path.join(categoryDir, file);
    const svgContent = fs.readFileSync(svgPath, 'utf-8');
    const baseName = file.replace('.svg', '');
    const componentName = toPascalCase(baseName);
    
    // Skip if SVG is invalid or empty
    if (!svgContent.includes('<path') && !svgContent.includes('<circle') && !svgContent.includes('<rect')) {
      console.log(`  Skipping ${baseName} (no path data)`);
      continue;
    }
    
    const componentCode = generateIconComponent(componentName, svgContent);
    
    // Create component file
    const componentDir = path.join(SRC_DIR, categoryName);
    fs.mkdirSync(componentDir, { recursive: true });
    fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentCode);
    
    icons.push({
      baseName,
      componentName,
      category: categoryName,
    });
  }
  
  return icons;
}

function generateCategoryIndex(icons, categoryName) {
  const exports = icons.map(icon => {
    return `export { default as ${icon.componentName} } from "./${icon.componentName}";`;
  }).join('\n');
  
  return exports + '\n';
}

function generateMainIndex(allIcons) {
  const lines = [];
  const categories = [...new Set(allIcons.map(i => i.category))];
  
  for (const cat of categories) {
    lines.push(`// ${cat.charAt(0).toUpperCase() + cat.slice(1)} Icons`);
    lines.push(`export * from "./${cat}";`);
    lines.push('');
  }
  
  return lines.join('\n');
}

function main() {
  console.log('Building icon component library...\n');
  
  const allIcons = [];
  const categories = ['crop', 'design', 'feature'];
  
  for (const cat of categories) {
    const catDir = path.join(SVG_DIR, cat);
    if (!fs.existsSync(catDir)) {
      console.log(`  Category '${cat}' directory not found, skipping.`);
      continue;
    }
    
    console.log(`Processing ${cat} icons...`);
    const icons = processCategory(catDir, cat);
    console.log(`  Generated ${icons.length} components`);
    allIcons.push(...icons);
    
    // Write category index (only if there are icons)
    if (icons.length > 0) {
      const catIndex = generateCategoryIndex(icons, cat);
      fs.writeFileSync(path.join(SRC_DIR, cat, 'index.ts'), catIndex);
    }
  }
  
  // Write main index
  const mainIndex = generateMainIndex(allIcons);
  fs.writeFileSync(path.join(SRC_DIR, 'index.ts'), mainIndex);
  
  console.log(`\nTotal: ${allIcons.length} icon components generated`);
  console.log(`Output: ${SRC_DIR}`);
  
  // Write manifest
  const manifest = {};
  for (const icon of allIcons) {
    if (!manifest[icon.category]) manifest[icon.category] = [];
    manifest[icon.category].push({
      name: icon.baseName,
      component: icon.componentName,
      import: `import { ${icon.componentName} } from "./src/${icon.category}";`,
    });
  }
  fs.writeFileSync(path.join(WORKSPACE, 'icon-manifest.json'), JSON.stringify(manifest, null, 2));
  
  return allIcons;
}

main();
