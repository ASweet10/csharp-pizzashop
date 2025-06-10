import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
    },
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}

export default config
