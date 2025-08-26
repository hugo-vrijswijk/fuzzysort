import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/fuzziersort.js',
  format: ['esm', 'cjs'],
  sourcemap: true,
  platform: 'neutral',
  outDir: 'dist',
});
