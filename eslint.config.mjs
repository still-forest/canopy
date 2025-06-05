import tseslint from "typescript-eslint";

export default tseslint.config(tseslint.configs.recommended, {
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
  },
});
