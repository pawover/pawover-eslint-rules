import antfuRules from "./core.antfu.js";
import importsRules from "./core.imports.js";
import simpleImportSortRules from "./core.importsSort.js";
import javascriptRules from "./core.javascript.js";
import reactRules from "./core.react.js";
import reactHooksRules from "./core.reactHooks.js";
import stylisticRules from "./core.stylistic.js";
import typescriptRules from "./core.typescript.js";
import vueRules from "./core.vue.js";

export type SeverityLevel = 0 | 1 | 2;
export type SeverityName = "off" | "warn" | "error";
export type Severity = SeverityName | SeverityLevel;
export type RuleConfig<RuleOptions extends unknown[] = unknown[]> = Severity | [Severity, ...Partial<RuleOptions>];

const javascript = javascriptRules as unknown as Record<keyof typeof javascriptRules, RuleConfig>;
const typescript = typescriptRules as unknown as Record<keyof typeof typescriptRules, RuleConfig>;
const react = reactRules as unknown as Record<keyof typeof reactRules, RuleConfig>;
const reactHooks = reactHooksRules as unknown as Record<keyof typeof reactHooksRules, RuleConfig>;
const vue = vueRules as unknown as Record<keyof typeof vueRules, RuleConfig>;
const stylistic = stylisticRules as unknown as Record<keyof typeof stylisticRules, RuleConfig>;
const importsSort = simpleImportSortRules as unknown as Record<keyof typeof simpleImportSortRules, RuleConfig>;
const antfu = antfuRules as unknown as Record<keyof typeof antfuRules, RuleConfig>;
const imports = importsRules as unknown as Record<keyof typeof importsRules, RuleConfig>;

const GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",
  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.next",
  "**/.svelte-kit",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.output",
  "**/.vite-inspect",
  "**/.yarn",
  "**/vite.config.*.timestamp-*",
  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/auto-component?(s).d.ts",
  "**/auto-router?(s).d.ts",
];

export default {
  javascript,
  typescript,
  react,
  reactHooks,
  vue,
  stylistic,
  antfu,
  imports,
  importsSort,
  GLOB_EXCLUDE,
};
