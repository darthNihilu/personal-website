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
  }
}

export const gravisTheme = {
  theme: THEME_TYPES.GRAVIS,
  backgroundColor: '#18191A',
  additionBackgroundColor: '#242526',
  text: {
    [COLOR_VARIANTS.PRIMARY]: '#FFFFFF',
    [COLOR_VARIANTS.SECONDARY]: '#62738C'
  }
} as const

export const themes = {
  [THEME_TYPES.DEFAULT]: defaultTheme,
  [THEME_TYPES.GRAVIS]: gravisTheme
}

export type ThemeType = typeof gravisTheme
