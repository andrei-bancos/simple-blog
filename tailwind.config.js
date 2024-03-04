/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      boxShadow: {
        'md': '0 2px 6px rgba(0, 0, 0, .25)'
      }
    },
  },
  plugins: [],
};
