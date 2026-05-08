/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e",
        secondary: "#0d47a1",
        'vision-blue': '#103E57',
        'vision-gold': '#EFB73B',
      },
      fontFamily: {
        neoneon: ['Neoneon', 'cursive'],
        jetbrains: ['jetbrains', 'Helvetica'],
      },
    },
  },
  plugins: [],
};