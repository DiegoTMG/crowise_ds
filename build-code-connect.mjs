import fs from 'fs';

// Read the original Figma metadata that has node IDs
const METADATA_FILE = '/Users/diegogoncalves/Library/Application Support/Code/User/workspaceStorage/e7702b8dd152a1d55e2566563b228b85/GitHub.copilot-chat/chat-session-resources/e8d4443a-ec04-4fe0-8216-943a60a3a643/toolu_bdrk_01UQ9S7rvEDQzpsjJoDSwQoV__vscode-1773680799313/content.txt';

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

function toKebabCase(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

const metadata = fs.readFileSync(METADATA_FILE, 'utf-8');

// Extract all icon instances/symbols with their node IDs
const regex = /<(?:instance|symbol)\s+id="([0-9:]+)"\s+name="([^"]+)"/g;
let match;
const allNodes = [];

while ((match = regex.exec(metadata)) !== null) {
  allNodes.push({ nodeId: match[1], name: match[2] });
}

// Determine category for each icon based on parent frame
// crop-icons frame: 3:163
// feature-icons frame: 3:176
// design-pattern frame: 3:891
const cropFrame = metadata.indexOf('id="3:163"');
const featureFrame = metadata.indexOf('id="3:176"');
const designFrame = metadata.indexOf('id="3:891"');

// Build mappings organized by category
const mappings = [];

// Get the frame positions and their end tags
function getFrameRange(frameId) {
  const startTag = `<frame id="${frameId}"`;
  const start = metadata.indexOf(startTag);
  if (start === -1) return null;
  
  // Find the closing </frame> for this frame
  let depth = 1;
  let pos = metadata.indexOf('>', start) + 1;
  while (depth > 0 && pos < metadata.length) {
    const nextOpen = metadata.indexOf('<frame', pos);
    const nextClose = metadata.indexOf('</frame>', pos);
    
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = metadata.indexOf('>', nextOpen) + 1;
    } else {
      depth--;
      if (depth === 0) return { start, end: nextClose + '</frame>'.length };
      pos = nextClose + '</frame>'.length;
    }
  }
  return { start, end: metadata.length };
}

const cropRange = getFrameRange('3:163');
const featureRange = getFrameRange('3:176');
const designRange = getFrameRange('3:891');

// Get the SVG files we have
const cropSvgs = new Set(fs.readdirSync('/Users/diegogoncalves/Desktop/VibeCoding/cropwise_ds/svg/crop').map(f => f.replace('.svg', '')));
const featureSvgs = new Set(fs.readdirSync('/Users/diegogoncalves/Desktop/VibeCoding/cropwise_ds/svg/feature').map(f => f.replace('.svg', '')));
const designSvgs = new Set(fs.readdirSync('/Users/diegogoncalves/Desktop/VibeCoding/cropwise_ds/svg/design').map(f => f.replace('.svg', '')));

// For each node, determine category based on position in metadata
const seen = new Set();

for (const node of allNodes) {
  const nodePos = metadata.indexOf(`id="${node.nodeId}"`);
  const kebabName = toKebabCase(node.name);
  const componentName = toPascalCase(node.name);
  
  // Skip already mapped names (deduplicate)
  if (seen.has(kebabName)) continue;
  
  let category = null;
  let source = null;
  
  if (cropRange && nodePos >= cropRange.start && nodePos <= cropRange.end && cropSvgs.has(kebabName)) {
    category = 'crop';
    source = `src/icons/crop/${componentName}.tsx`;
  } else if (featureRange && nodePos >= featureRange.start && nodePos <= featureRange.end && featureSvgs.has(kebabName)) {
    category = 'feature';
    source = `src/icons/feature/${componentName}.tsx`;
  } else if (designRange && nodePos >= designRange.start && nodePos <= designRange.end && designSvgs.has(kebabName)) {
    category = 'design';
    source = `src/icons/design/${componentName}.tsx`;
  }
  
  if (source) {
    seen.add(kebabName);
    mappings.push({
      nodeId: node.nodeId,
      componentName,
      source,
      label: 'React'
    });
  }
}

console.log(`Total Code Connect mappings: ${mappings.length}`);
console.log(`  Crop: ${mappings.filter(m => m.source.includes('/crop/')).length}`);
console.log(`  Feature: ${mappings.filter(m => m.source.includes('/feature/')).length}`);
console.log(`  Design: ${mappings.filter(m => m.source.includes('/design/')).length}`);

// Write to file
fs.writeFileSync('/Users/diegogoncalves/Desktop/VibeCoding/cropwise_ds/code-connect-mappings.json', JSON.stringify(mappings, null, 2));

// Also output in a format ready for the MCP tool
console.log('\nSample mappings:');
mappings.slice(0, 5).forEach(m => console.log(`  ${m.nodeId} -> ${m.componentName} (${m.source})`));
