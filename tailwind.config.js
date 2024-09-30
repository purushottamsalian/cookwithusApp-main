/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    
    "./src/navigation/**/*.{js,jsx,ts,tsx}",
    "./src/helpers/**/*.{js,jsx,ts,tsx}" // Added this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}