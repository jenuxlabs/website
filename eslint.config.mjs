import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**', 'work/**', 'outputs/**', '.wrangler/**', 'next-env.d.ts']),
  // This is a static Cloudflare Pages export: standard links, local image files,
  // and the public stylesheet work without a Next server or client-side routing.
  { rules: { '@next/next/no-html-link-for-pages': 'off', '@next/next/no-img-element': 'off', '@next/next/no-css-tags': 'off' } },
]);

export default eslintConfig;
