/// <reference types='vitest' />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const sveltekitFix = async () => {
  const cwd = process.cwd();
  process.chdir(__dirname); // Temporarily change the working directory
  const plugin = await sveltekit(); // Load the SvelteKit plugin
  process.chdir(cwd); // Restore the original working directory
  return plugin;
};

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/landing',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [sveltekitFix()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
