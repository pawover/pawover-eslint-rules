/* eslint-disable antfu/no-import-dist */
import { defineConfig } from "eslint/config";

import eslintTs from "typescript-eslint";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginAntfu from "eslint-plugin-antfu";
import eslintPluginImports from "eslint-plugin-import-lite";

import eslintRules from "./dist/esm/index.js";

const plugins = {
  typescript: {
    ts: eslintTs.plugin,
  },
  stylistic: {
    stylistic: eslintPluginStylistic,
  },
  antfu: {
    antfu: eslintPluginAntfu,
  },
  imports: {
    imports: eslintPluginImports.configs.all.plugins["import-lite"],
  },
};

export default defineConfig([
  {
    ignores: eslintRules.GLOB_EXCLUDE,
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ...plugins.typescript,
      ...plugins.stylistic,
      ...plugins.antfu,
      ...plugins.imports,
    },
    rules: {
      ...eslintRules.javascript,
      ...eslintRules.typescript,
      ...eslintRules.stylistic,
      ...eslintRules.antfu,
      ...eslintRules.imports,
    },
  },
]);
