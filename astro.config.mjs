// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: 'docs',
  site: 'https://mbarriosRojas.github.io/medicoadmin-admin/',
  base: '/medicoadmin-admin/',
});
