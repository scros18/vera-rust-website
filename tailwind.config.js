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
        sans: ['var(--font-rajdhani)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'var(--font-rajdhani)', 'sans-serif'],
      },
      colors: {
        rust: {
          orange: '#fb923c',
          red: '#dc2626',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

