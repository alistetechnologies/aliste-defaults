
// 1. Import required configs and packages (must use ES module syntax: import/export)
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  // 2. Add the recommended settings from @eslint/js (replaces "eslint:recommended")
  js.configs.recommended,

  // 3. Main Configuration Object
  {
    // Replaces the old "env" and "parserOptions" keys
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Replaces the old "env" globals like browser:true, node:true
      globals: {
        browser: true,
        Node: true,
        es2021: true
        // Add other globals if needed (e.g., specific framework globals)
      }
    },
    // Replaces the old "rules" key
    rules: {
      // Quality Rules
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "error"
    }
  },

  // 4. Add the 'prettier' config object LAST to ensure it disables all stylistic rules
  prettierConfig
];