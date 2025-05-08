import antfu from "@antfu/eslint-config";
import prettier from "eslint-config-prettier";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    jsonc: false,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/migrations/*"],
  },
  {
    rules: {
      "no-console": ["off"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["off"],
      "perfectionist/sort-named-imports": ["off"],
      "unicorn/filename-case": [
        "warn",
        {
          case: "kebabCase",
          ignore: ["readme.md"],
        },
      ],
    },
  },
  {
    name: "prettier",
    rules: {
      ...prettier.rules,
    },
  }
);
