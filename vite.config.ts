import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/test-task-MindBox/", // for git hub pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
} as UserConfig )
