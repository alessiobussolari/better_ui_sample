import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [],
  resolve: {
    alias: {
      "@styles": resolve(__dirname, "app/assets/stylesheets"),
    },
  },
  build: {
    outDir: "app/assets/builds",
    lib: {
      entry: "app/javascript/application",
      name: "application",
      formats: ["es"],
      fileName: (format) => `application.js`,
    },
  },
});
