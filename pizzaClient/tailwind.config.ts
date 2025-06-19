import type { Config } from 'tailwindcss'
import "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
      fontFamily: {
        heading: ["Bebas Neue", 'sans-serif'],
        body: ["Poppins", 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config
