import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// GitHub Pages project site: https://kepty19.github.io/Kepty-English-Official-Website/
const githubPagesBase = '/Kepty-English-Official-Website/';

export default defineConfig(({mode}) => {
  return {
    base: mode === 'production' ? githubPagesBase : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
