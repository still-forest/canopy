// Ambient declarations for CSS side-effect imports (e.g. `import "./Component.css"`).
// TypeScript 6 raises TS2882 for side-effect imports without a module declaration;
// these imports are handled at build time by Vite.
declare module "*.css";
