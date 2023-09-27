module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#556cd6',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#556cd6",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#556cd6",
        },
      },
    ],
  },
}
