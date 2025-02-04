import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 경로 자동 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
