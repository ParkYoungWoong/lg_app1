/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@mocks': resolve(__dirname, './tests/mocks')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setupTests.tsx'],
    include: ['src/**/__tests__/**/*.[jt]s?(x)'],
    coverage: {
      provider: 'v8',
      exclude: [
        'tests/**',
        '**/*.d.ts',
        '**/*.config.[jt]s',
        'src/main.tsx',
        'src/routes/*',
        'src/components/Loader.tsx'
      ]
    }
  }
})
