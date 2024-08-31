import type { Config } from 'tailwindcss';

export default {
  safelist: [{
    pattern: /bg-*/,
  }, {
    pattern: /text-*/,
  }],
  content: [
    './src/**/*.{ts,tsx}',
  ],
} satisfies Config;