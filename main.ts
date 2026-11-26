// news-image-20261125 — "The World in One Day", Wednesday 25 November 2026.
// Node 22 entrypoint: copies the finished newspaper image this repo holds
// to /output/entry.png. No network, no clock, no randomness, so the bytes
// written are the same on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryImage = join(repoRoot, "entry.png");
const destination = join(outputDir, "entry.png");

function placeEntry() {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(entryImage, destination);
}

placeEntry();
