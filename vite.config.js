import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Удаляем или изменяем base path, т.к. на Vercel приложение будет на root домене
  base: "/",
  server: {
    historyApiFallback: true,
  },
  // Добавляем настройки для SPA роутинга
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
