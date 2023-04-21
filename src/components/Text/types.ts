import {
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

export interface TextProps
  extends SpaceProps,
    TypographyProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps {
  color?: string
  fontSize?: any
  bold?: boolean
  small?: boolean
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
  mobileSize?: number
}
