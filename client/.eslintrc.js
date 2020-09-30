module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "prettier",
    "eslint-plugin-cypress",
  ],
  env: { "cypress/globals": true },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "react-app",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions"] },
    ],
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/newline-after-import": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "react/prop-types": "off",
    "react/jsx-fragments": ["warn", "syntax"],
    "react/destructuring-assignment": ["warn", "always"],
    "react/no-array-index-key": "warn",
    "react/no-multi-comp": "warn",
    "react/jsx-handler-names": "warn",
    "object-shorthand": "warn",
    "no-restricted-imports": ["error"],
  },
};
