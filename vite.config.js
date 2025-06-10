import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "https://github.com/StefanPalsson/Stefan-CV.git", // ← sätt detta till repo-namnet på GitHub
  plugins: [react()],
});
