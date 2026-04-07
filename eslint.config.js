// @ts-nocheck
import { defineConfig } from "eslint/config";

import eslintTs from "typescript-eslint";
import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginAntfu from "eslint-plugin-antfu";
import eslintPluginImports from "eslint-plugin-import-lite";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import eslintRules from "./dist/index.js";

const plugins = {
  ts: {
    ts: eslintTs.plugin,
  },
  react: {
    "@eslint-react": eslintPluginReact,
    "react-hooks": eslintPluginReactHooks,
  },
  stylistic: {
    stylistic: eslintPluginStylistic,
  },
  antfu: {
    antfu: eslintPluginAntfu,
  },
  imports: {
    "imports": eslintPluginImports.configs.all.plugins["import-lite"],
    "simple-import-sort": eslintPluginSimpleImportSort,
  },
};

export default defineConfig([
  {
    ignores: eslintRules.GLOB_EXCLUDE,
  },
  {
    files: ["**/*.js"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    plugins: {
      ...plugins.stylistic,
      ...plugins.antfu,
      ...plugins.imports,
    },
    rules: {
      ...eslintRules.javascript,
      ...eslintRules.stylistic,
      ...eslintRules.antfu,
      ...eslintRules.imports,
      ...eslintRules.importsSort,
      "antfu/no-import-dist": 0,
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    plugins: {
      ...plugins.ts,
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
