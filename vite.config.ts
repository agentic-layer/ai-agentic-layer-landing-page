import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'copy-404',
      writeBundle() {
        const source = path.resolve(__dirname, '404.html');
        const target = path.resolve(__dirname, 'dist/404.html');
        if (fs.existsSync(source)) {
          fs.copyFileSync(source, target);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
