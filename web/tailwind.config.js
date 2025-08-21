/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#fefcf9',
        ink: '#1A1A1A',
        sand: '#EDE8E1',
        clay: '#D7C6B3',
        herbal: '#839378',
        shadow: '#D3C9B4',
        gold: '#B89B5E',
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
