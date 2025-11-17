import javascriptRules from "./core.javascript.js";
import typescriptRules from "./core.typescript.js";

import antfuRules from "./core.antfu.js";
import reactRules from "./core.react.js";
import stylisticRules from "./core.stylistic.js";
import vueRules from "./core.vue.js";

export type SeverityLevel = 0 | 1 | 2;
export type SeverityName = "off" | "warn" | "error";
export type Severity = SeverityName | SeverityLevel;
export type RuleConfig = Severity | [Severity];

const javascript = javascriptRules as unknown as Record<keyof typeof javascriptRules, RuleConfig>;
const typescript = typescriptRules as unknown as Record<keyof typeof typescriptRules, RuleConfig>;
const react = reactRules as unknown as Record<keyof typeof reactRules, RuleConfig>;
const vue = vueRules as unknown as Record<keyof typeof vueRules, RuleConfig>;
const stylistic = stylisticRules as unknown as Record<keyof typeof stylisticRules, RuleConfig>;
const antfu = antfuRules as unknown as Record<keyof typeof antfuRules, RuleConfig>;

export default {
  javascript,
  typescript,
  react,
  vue,
  stylistic,
  antfu,
};
