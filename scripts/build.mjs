import { execSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

rmSync(resolve(root, "dist"), { recursive: true, force: true });

for (const config of ["tsconfig.build.json", "tsconfig.build.cjs.json"]) {
  execSync(`tsc -p ${config}`, { stdio: "inherit", cwd: root });
}

await import("./generate-cjs-types.mjs");

writeFileSync(resolve(root, "dist/cjs/package.json"), JSON.stringify({ type: "commonjs" }, null, 2));
