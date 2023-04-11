/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        squarePeg: ["'Square Peg', cursive"],
      },
      colors: {
        primary: {
          main: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
          contrastText: "#f8fafc"
        }
      }
    },
  },
  plugins: [],
}
