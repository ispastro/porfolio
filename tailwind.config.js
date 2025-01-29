/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this pattern to match your source files
    "!./node_modules/**/*", // Exclude node_modules
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};