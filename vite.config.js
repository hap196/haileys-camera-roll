import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'haileys-camera-roll', // Replace <REPO_NAME> with your actual repo name
  build: {
    outDir: 'dist',
  },
});
