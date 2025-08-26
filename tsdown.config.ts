import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/fuzzysort.js',
  format: ['esm', 'cjs'],
  sourcemap: true,
  platform: 'neutral',
  outDir: 'dist',
});
