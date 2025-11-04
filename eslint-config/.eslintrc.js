// my-org/github-workflows/eslint-config/.eslintrc.json
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // 👈 THIS IS THE CRITICAL LINE to disable all stylistic rules
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Quality Rules (NOT style)
    "no-unused-vars": "warn",
    "no-undef": "error",
    eqeqeq: "error", // Example quality rule: requires triple equals ===
  },
};
