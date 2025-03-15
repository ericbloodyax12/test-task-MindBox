import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-task-MindBox/",
  test: {
    environment: 'jsdom', // Добавляем jsdom для работы с DOM
    globals: true, // Позволяет использовать `describe`, `it`, `expect` без импортов
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
} as UserConfig )
