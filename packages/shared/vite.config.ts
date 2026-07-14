import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'shared',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'svelte',
        },
      },
    },
  },
});
