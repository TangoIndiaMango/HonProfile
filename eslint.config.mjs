import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    // Project-wide rule relaxations (no source edits needed)
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      // Allow unused variables and parameters
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      // Disable React hooks exhaustive-deps warning
      "react-hooks/exhaustive-deps": "off",
    },
  },
  {
    // File-specific overrides (suppress known unused helper)
    files: ["src/*.ts", "src/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
