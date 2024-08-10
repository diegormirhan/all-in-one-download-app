/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-color': '#F1F2FA',
        'main-color': '#4044FC',
        'main-font-color': '#000000',
        'secondary-bg-color': '#2428FF',
      }
    },
  },
  plugins: [],
};
