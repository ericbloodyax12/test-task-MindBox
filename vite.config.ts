import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-task-MindBox/",
  test: {
    environment: 'jsdom', // Добавляем jsdom для работы с DOM
    globals: true, // Позволяет использовать `describe`, `it`, `expect` без импортов
  },
} as UserConfig )
