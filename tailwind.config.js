module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Varela Round', 'sans-serif'],
      },
      colors: {
        yuzu: {
          200: "#F8EFBA",
          300: "#ffc843",
          500: "#ffa816"
        },
        smoke: {
          200: "#c1c8d2",
          400: "#666666",
          500: "#434c54"
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flip: {
          '0%, 100%': { transform: 'rotateX(180deg)' },
          '50%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        flip: 'flip 1s ease-in-out infinite',
      },
    }
  }
}
