// @ts-nocheck
import { defineConfig } from "eslint/config";

import eslintTs from "typescript-eslint";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginAntfu from "eslint-plugin-antfu";
import eslintPluginImports from "eslint-plugin-import-lite";
import eslintPluginImportsSort from "eslint-plugin-simple-import-sort";

import eslintRules from "./dist/index.js";

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
    importsSort: eslintPluginImportsSort,
  },
};

export default defineConfig([
  {
    ignores: [...eslintRules.GLOB_EXCLUDE, "eslint.config.js"],
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
      ...eslintRules.importsSort,
    },
  },
]);
