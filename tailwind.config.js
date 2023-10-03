import { nextui } from '@nextui-org/react'

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)', 'sans-serif'],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {},
      },
    }),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#556cd6',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#556cd6',
        },
      },
    ],
  },
}
