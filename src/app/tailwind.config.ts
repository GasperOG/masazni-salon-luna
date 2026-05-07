import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft gold/brass - conveys luxury and quality
        primary: {
          DEFAULT: '#C5A059',
          light: '#DBC086',
          dark: '#9E7D40',
        },
        // Calming cream/beige - conveys cleanliness and relaxation
        secondary: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFF',
          dark: '#E8E4D9',
        },
        // Deep forest green - grounding, earthy, and natural
        accent: {
          DEFAULT: '#2A4B3C',
          light: '#3D6B56',
          dark: '#1A3328',
        },
      },
    },
  },
  plugins: [],
}

export default config