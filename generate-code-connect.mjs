import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const FIGMA_FILE_URL = 'https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/01---Icons-Library';
const mappings = JSON.parse(readFileSync('code-connect-mappings.json', 'utf-8'));

// Group by category
const groups = {};
for (const m of mappings) {
  const parts = m.source.split('/');
  const category = parts[1]; // crop, design, feature
  if (!groups[category]) groups[category] = [];
  groups[category].push(m);
}

for (const [category, items] of Object.entries(groups)) {
  const imports = items.map(m =>
    `import ${m.componentName} from './${m.componentName}';`
  ).join('\n');

  const connects = items.map(m => {
    const nodeParam = m.nodeId.replace(':', '-');
    const url = `${FIGMA_FILE_URL}?node-id=${nodeParam}`;
    return `figma.connect(${m.componentName}, '${url}', {
  example: () => <${m.componentName} />,
});`;
  }).join('\n\n');

  const content = `import figma from '@figma/code-connect';
${imports}

${connects}
`;

  const outPath = `src/${category}/${category}.figma.tsx`;
  writeFileSync(outPath, content);
  console.log(`Written ${outPath} with ${items.length} connections`);
}
