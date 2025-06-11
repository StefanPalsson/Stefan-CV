import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // ← sätt detta till repo-namnet på GitHub
  plugins: [react()],
});
