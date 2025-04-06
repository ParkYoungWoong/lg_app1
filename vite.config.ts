/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@mocks', replacement: '/tests/mocks' }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setupTests.tsx'],
    coverage: {
      provider: 'v8',
      exclude: [
        '**/*.d.ts',
        '**/*.config.[jt]s',
        'src/main.tsx',
        'src/routes/*',
        'src/components/Loader.tsx'
      ]
    }
  }
})
