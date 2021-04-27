import { createHash } from 'https://deno.land/std@0.77.0/hash/mod.ts';

export function merkleize(nodes: string[]): string {
  // if odd number of nodes, duplicate the last one
  if (nodes.length % 2 === 1) {
    const [lastNode] = nodes.slice(-1);
    nodes.push(lastNode);
  }

  const hashedNodes = nodes.map(hash);

  const snapped = snap(hashedNodes);
  return snapped[0];
}

// recursively halves the number of nodes by combining in twos
function snap(nodes: string[]): string[] {
  if (nodes.length === 1) return nodes;

  const result = [];

  for (let i = 0; i < nodes.length / 2; i += 1) {
    const left = nodes[i * 2];
    const right = nodes[i * 2 + 1];
    result.push(combine(left, right));
  }

  return snap(result);
}

function combine(hash1: string, hash2: string): string {
  return hash(hash1 + hash2);
}

function hash(data: string): string {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.toString();
}

export function split(input: string): string[] {
  return input.split(' ');
}