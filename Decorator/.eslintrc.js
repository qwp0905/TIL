module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  plugins: [
    "@typescript-eslint/eslint-plugin"
  ],
  rules: {
    "@typescript-eslint/ban-types": 1,
    "prefer-const": 1,
    "@typescript-eslint/no-empty-function": 1
  },
}
