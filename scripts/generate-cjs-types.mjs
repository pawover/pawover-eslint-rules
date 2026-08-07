import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const typesDir = resolve(import.meta.dirname, "..", "dist/types");

for (const name of readdirSync(typesDir)) {
  if (!name.endsWith(".d.ts") || name.endsWith(".d.ts.map")) continue;
  const base = name.slice(0, -".d.ts".length);
  writeFileSync(resolve(typesDir, `${base}.d.cts`), `export type * from './${base}.js';\n`);
}
