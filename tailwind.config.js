const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  theme: {
    screens: {
      xs: '476px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    colors: {
      ...defaultTheme.colors,
      teal: colors.teal,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      sky: colors.lightBlue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      gray: colors.coolGray,
      // gray: colors.trueGray,
      // gray: colors.gray,
      // gray: colors.blueGray,
      // gray: colors.warmGray,
      orange: colors.orange
    },
    rotate: {
      ...defaultTheme.rotate,
      '-360': '-360deg',
      360: '360deg'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '2rem'
      }
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      noto: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    }
  },
  variants: {
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    fontWeight: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    tailwindForms
  ]
};
