import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2026-portfolio/',
  plugins: [react()],
  server: {
    open: true,
    host: true,
    port: 5713,
  },
});
