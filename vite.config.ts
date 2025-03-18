import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_portfolio_react/',  // Set base path for GitHub Pages deployment
  plugins: [react()],  // Ensure React plugin is included
});
