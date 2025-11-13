export default {
  "vue/attribute-hyphenation": [2, "never", { ignore: [] }],
  "vue/first-attribute-linebreak": [2, { singleline: "beside", multiline: "below" }],
  "vue/multi-word-component-names": 0,
  "vue/html-self-closing": [2, { html: { void: "always", normal: "always", component: "always" }, svg: "always", math: "always" }],
  "vue/script-indent": [2, 2, { baseIndent: 0, switchCase: 1, ignores: [] }],

  "vue/block-order": [2, { order: ["script:not([setup])", "script[setup]", "template", "style:not([scoped])", "style[scoped]"] }],
  "vue/component-name-in-template-casing": [2, "PascalCase", { registeredComponentsOnly: false }],
  "vue/component-options-name-casing": [2, "PascalCase"],
  "vue/custom-event-name-casing": [2, "camelCase", { ignores: [] }],
  "vue/define-macros-order": [2, { order: ["defineOptions", "defineProps", "defineEmits"], defineExposeLast: false }],
  "vue/v-on-event-hyphenation": [2, "never", { autofix: true }],
  "vue/operator-linebreak": [2, "after", { overrides: { "?": "ignore", ":": "ignore" } }],
};
