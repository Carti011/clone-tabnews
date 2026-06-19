import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier/flat";
import jestPlugin from "eslint-plugin-jest";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "infra/migrations/**"],
  },
  ...nextCoreWebVitals,
  {
    files: ["tests/**/*.js"],
    ...jestPlugin.configs["flat/recommended"],
  },
  prettierConfig,
];

export default config;
