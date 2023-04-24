export enum THEME_TYPES {
  DEFAULT = 'default',
  GRAVIS = 'gravis'
}

export enum COLOR_VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ADDITIONAL = 'additional',
  RED = 'red',
  GREEN = 'green'
}

export const defaultTheme = {
  theme: THEME_TYPES.DEFAULT,
  backgroundColor: '#f0f0f6',
  additionBackgroundColor: '#fff',
  text: {
    [COLOR_VARIANTS.PRIMARY]: '#2B2B2B',
    [COLOR_VARIANTS.SECONDARY]: '#767676'
  },
  svgFillColor: '#8c8c8c',
  svgHoverColor: '#a9a9a9',
  rightSideIconBackground: '#f0f0f6',
  rightSideIconBackgroundHover: '#dadae1'
}

export const gravisTheme = {
  theme: THEME_TYPES.GRAVIS,
  backgroundColor: '#18191A',
  additionBackgroundColor: '#242526',
  text: {
    [COLOR_VARIANTS.PRIMARY]: '#FFFFFF',
    [COLOR_VARIANTS.SECONDARY]: '#d9d9d9'
  },
  svgFillColor: '#b9b9b9',
  svgHoverColor: '#b9b9b9',
  rightSideIconBackground: 'rgba(255, 255, 255, 0.05)',
  rightSideIconBackgroundHover: 'rgba(255, 255, 255, 0.15)'
} as const

export const themes = {
  [THEME_TYPES.DEFAULT]: defaultTheme,
  [THEME_TYPES.GRAVIS]: gravisTheme
}

export type ThemeType = typeof gravisTheme
