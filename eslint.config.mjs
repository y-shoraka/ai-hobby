import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js recommended linting rules
    "next/typescript", // TypeScript support
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:import/recommended", // Import/export rules
    "plugin:prettier/recommended" // Prettier integration
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }, // Allow unused variables prefixed with "_"
      ],
      // React-specific rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      // Prettier formatting
      "prettier/prettier": "error", // Ensures Prettier formatting is enforced
      // General best practices
      "no-console": "error", // Disallow console logs
      "no-debugger": "error", // Disallow debugger statements
      "no-alert": "error", // Disallow alert statements
      "no-unused-vars": "off", // Disallow unused variables
      // Import sorting
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-ins
            "external", // External dependencies
            "internal", // Internal imports
            "unknown", // Unknown types
            "parent", // Parent imports
            "sibling", // Sibling imports
          ],
          pathGroups: [
            {
              pattern: "~/**", // Handle imports using "~/"
              group: "parent",
              position: "after",
            },
          ],
          "newlines-between": "always", // Enforce newlines between groups
        },
      ],
    },
  },
];

export default eslintConfig;
