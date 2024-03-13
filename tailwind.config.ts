import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff0000',
          secondary: '#0000ff',
          accent: '#00ffff',
          neutral: '#ff00ff',
          'base-100': '#ffffff',
          info: '#0000ff',
          success: '#00ff00',
          warning: '#00ff00',
          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
