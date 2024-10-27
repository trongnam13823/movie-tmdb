/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [react(), envCompatible()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
})
