// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        port: {
          DEFAULT: '#3b1f2b', // subtle port-wine tone
          light: '#5a2f42',
          dark: '#2a141f',
        },
        background: '#0b0b0b', // near-black
      },
    },
  },
  plugins: [],
};