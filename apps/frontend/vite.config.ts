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
  cacheDir: '../../node_modules/.vite/apps/frontend',
  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 4300,
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
