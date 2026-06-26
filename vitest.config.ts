import { defineConfig } from "vitest/config";

// Only this plugin's own tests (src/ + test/) — never the bundled submodule's
// internal tests (core/), which run in their own repo.
export default defineConfig({
  test: { include: ["src/**/*.test.{ts,js}", "test/**/*.test.{ts,js,mjs}"] },
});
