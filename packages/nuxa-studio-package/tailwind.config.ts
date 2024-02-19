/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "docs/content/**/*.md"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans].join(","),
      title: ["Playfair Display", ...defaultTheme.fontFamily.sans].join(","),
    },
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      colors: {
        primary: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        secondary: {
          DEFAULT: "#1C1B1B",
        },
        third: {
          DEFAULT: "#6EA8FF1A",
        },
      },
    },
  },
};
