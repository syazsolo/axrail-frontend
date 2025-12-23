import type { Config } from 'prettier';

const config: Config = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  tabWidth: 2,
};

export default config;
