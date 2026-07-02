/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0B0D',
        foreground: '#F2F1ED',
        accent: '#5EE7C7',
        muted: '#8A8D93',
      },
    },
  },
  plugins: [],
};
