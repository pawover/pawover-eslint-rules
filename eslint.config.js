import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginAntfu from "eslint-plugin-antfu";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

import { defineConfig } from "eslint/config";
import globals from "globals";
import eslintTs from "typescript-eslint";
// eslint-disable-next-line antfu/no-import-dist
import eslintRules from "./dist/index.js";

const plugins = {
  ts: {
    ts: eslintTs.plugin,
  },
  react: {
    "react": eslintPluginReact.configs.all.plugins["@eslint-react"],
    "react-dom": eslintPluginReact.configs.all.plugins["@eslint-react/dom"],
    "react-web-api": eslintPluginReact.configs.all.plugins["@eslint-react/web-api"],
    "react-hooks": eslintPluginReactHooks,
    "react-hooks-extra": eslintPluginReact.configs.all.plugins["@eslint-react/hooks-extra"],
    "react-naming-convention": eslintPluginReact.configs.all.plugins["@eslint-react/naming-convention"],
  },
  stylistic: {
    stylistic: eslintPluginStylistic,
  },
  antfu: {
    antfu: eslintPluginAntfu,
  },
};
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
  "routeTree.gen.ts",
];

export default defineConfig([
  {
    ignores: GLOB_EXCLUDE,
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    plugins: { ...plugins.stylistic, ...plugins.antfu },
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2020, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
    rules: {
      ...eslintRules.javascript,
      ...eslintRules.stylistic,
      ...eslintRules.antfu,
    },
  },
  {
    files: ["**/*.{ts,cts,mts,tsx}"],
    plugins: { ...plugins.ts, ...plugins.react, ...plugins.stylistic, ...plugins.antfu },
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...eslintRules.javascript,
      ...eslintRules.typescript,
      ...eslintRules.react,
      ...eslintRules.reactRefresh,
      ...eslintRules.stylistic,
      ...eslintRules.antfu,
    },
  },
]);
