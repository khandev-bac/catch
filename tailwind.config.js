/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "sans-Regular": ["sans-Regular"],
        "sans-Medium": ["sans-Medium"],
        "sans-SemiBold": ["sans-SemiBold"],
        "sans-Bold": ["sans-Bold"],
      },
      colors: {
        primary: "#FF0066",
      },
    },
  },
  plugins: [],
};
