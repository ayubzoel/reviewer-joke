// The joke the reviewer laughs at — entry program.
// Writes one one-line joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: the same bytes on every run. No network, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My coding agent renamed every variable for clarity, and now only it knows what the code does.";

// The joke: the agent renamed every variable "for clarity", and the clarity
// moved the understanding from the human to the agent — now only it knows
// what the code does. One line, no explanation, no instruction to laugh.
// Gate: 1-280 Unicode code points, not whitespace-only.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text must be 1-280 code points, got ${codePoints}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
