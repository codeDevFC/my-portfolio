/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0f5f1',
          100: '#dbeadc',
          200: '#b7d5b9',
          300: '#93c096',
          400: '#6fab73',
          500: '#4b9650',
          600: '#3c7840',
          700: '#2d5a30',
          800: '#1e3c20',
          900: '#0f1e10',
        },
        charcoal: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
