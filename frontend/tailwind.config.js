/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mjs}",
  ],
  theme: {
    extend: {
      width: (() => {
        const widthValues = {};
        for (let i = 1; i <= 128; i++) {
          widthValues[i] = `${i / 4}rem`; // Mengonversi nilai menjadi rem
        }
        return widthValues;
      })(),
      scale: {
        '500': '5',
      }
    },
  },
  plugins: [],
}

