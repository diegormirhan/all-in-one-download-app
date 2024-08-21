/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'main-bg-color': '#F1F2FA',
        'main-color': '#4044FC',
        'main-font-color': '#000000',
        'secondary-bg-color': '#2428FF',
      },
      backgroundImage: {
        'gradient-instagram': 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
        'gradient-facebook': 'linear-gradient(45deg, #0072ff, #00c6ff )',
        'gradient-pinterest': 'linear-gradient(45deg, #ff0505, #e3225f, #ff47c8)',
        'gradient-youtube': 'linear-gradient(45deg, #ff0000, #282828)',
        'gradient-tiktok': 'linear-gradient(45deg, #000000, #00f2fe)',
        'gradient-reddit': 'linear-gradient(45deg, #ff8800, #ff3300)',
        'gradient-twitter': 'linear-gradient(45deg, #004769, #000000)',
        'gradient-spotify': 'linear-gradient(45deg, #1db954, #191414)',
        'gradient-linkedin': 'linear-gradient(45deg, #454580, #030367)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate",)
  ],
}