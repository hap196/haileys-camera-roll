import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Base URL for the custom domain
  build: {
    outDir: 'dist',
  },
});
