/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ Ajout des bons chemins vers tous les fichiers contenant des classes NativeWind
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
