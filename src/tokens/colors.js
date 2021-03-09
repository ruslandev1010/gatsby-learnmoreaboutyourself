// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  white: '#ffffff',
  yellow: '#ffdc4e',
  lightYellow: '#f9e892',
  blueGreyed: '#546c77',
  darkBlue: '#022a4b',
  beige: '#fff9d9',
  red: '#ff0000',
  black: '#000000',
}

export const COLORS = {
  ...colors,
  text: {
    light: colors.grey500,
    dark: colors.white,
  },
  textSecondary: {
    light: colors.blueGreyed,
    dark: '#c6d8e0',
  },
  siteBackground: {
    light: colors.white,
    dark: colors.black,
  },
  wrapperBackground: {
    light: colors.white,
    dark: colors.grey500,
  },
  secondaryContentBackground: {
    light: '#f7f7f7',
    dark: '#3a3a3a',
  },
  wrapperShadow: {
    light: '#0000001a',
    dark: '#00000000',
  },
  primary: {
    light: colors.grey500,
    dark: colors.grey500,
  },
  primaryAlpha: {
    light: '#e5e5e5',
    dark: colors.black,
  },
  primaryBeta: {
    light: colors.black,
    dark: colors.white,
  },
  primaryBetaBack: {
    light: colors.white,
    dark: colors.black,
  },
  secondary: {
    light: colors.yellow,
    dark: colors.yellow,
  },
  h2: {
    light: colors.grey500,
    dark: colors.yellow,
  },
  cardFooter: {
    light: '#333333',
    dark: colors.white,
  },
  secondaryBack: {
    light: '#F9F9F9',
    dark: '#171717',
  },
  footerBack: {
    light: '#585858',
    dark: '#171717',
  }
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
