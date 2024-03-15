import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure that .jsx files are resolved as JavaScript modules
    extensions: [".js", ".jsx"],
  },
  server: {
    // Set the MIME type for JavaScript files
    mimeTypes: {
      // Ensure that .js files are served with the correct MIME type
      "application/javascript": ["js", "mjs"],
    },
  },
});
