import { readFileSync, writeFileSync } from 'fs';

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'AnqFoDnF8mDF6RWwrVW9rR';
const mappings = JSON.parse(readFileSync('code-connect-mappings.json', 'utf-8'));

// Batch node IDs (API has URL length limits, so batch in groups of 50)
const batchSize = 50;
const batches = [];
for (let i = 0; i < mappings.length; i += batchSize) {
  batches.push(mappings.slice(i, i + batchSize));
}

async function resolveComponentIds() {
  const instanceToComponent = {};

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const ids = batch.map(m => m.nodeId).join(',');
    const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${ids}`;

    const res = await fetch(url, {
      headers: { 'X-Figma-Token': TOKEN }
    });
    const data = await res.json();

    if (data.err) {
      console.error(`Batch ${i} error:`, data.err);
      continue;
    }

    for (const [nodeId, nodeData] of Object.entries(data.nodes)) {
      const doc = nodeData.document;
      if (doc && doc.componentId) {
        instanceToComponent[nodeId] = doc.componentId;
      } else if (doc && doc.type === 'COMPONENT') {
        instanceToComponent[nodeId] = nodeId;
      } else {
        console.warn(`Node ${nodeId} (${doc?.name}): type=${doc?.type}, no componentId`);
      }
    }

    console.log(`Batch ${i+1}/${batches.length}: resolved ${Object.keys(instanceToComponent).length} so far`);
  }

  // Now update the mappings with the actual component IDs
  const updated = mappings.map(m => {
    const compId = instanceToComponent[m.nodeId];
    return {
      ...m,
      instanceNodeId: m.nodeId,
      nodeId: compId || m.nodeId
    };
  });

  // Deduplicate by component nodeId (multiple instances may point to same component)
  const seen = new Set();
  const deduped = updated.filter(m => {
    if (seen.has(m.nodeId)) return false;
    seen.add(m.nodeId);
    return true;
  });

  writeFileSync('code-connect-mappings-resolved.json', JSON.stringify(deduped, null, 2));
  console.log(`\nResolved ${deduped.length} unique component mappings (from ${mappings.length} instances)`);
}

resolveComponentIds().catch(console.error);
