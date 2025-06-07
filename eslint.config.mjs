import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import eslintPluginReact from "eslint-plugin-react";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
// bun add --dev eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prefer-arrow

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: "eslint:recommended",
});

const lint = [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:react/recommended"
  ),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        NodeJS: true,
      },
    },
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
      "react-hooks": eslintPluginReactHooks,
      "prefer-arrow": eslintPluginPreferArrow,
    },
    rules: {
      "object-curly-spacing": ["error", "always"],
      "react/prop-types": "off",
      "react/display-name": "off",
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "react-native/no-inline-styles": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@next/next/no-img-element": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@common/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@front/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@back/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionDeclaration",
          message:
            "Function declarations are not allowed. Use arrow functions instead.",
        },
      ],
    },
  },
];

export default lint;
