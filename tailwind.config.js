/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".drop-shadow-orange": {
          filter: "drop-shadow(0 4px 4px #D27859)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
