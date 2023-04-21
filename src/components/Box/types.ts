import { HTMLAttributes } from 'react';
import { BackgroundProps, BorderProps, DisplayProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';


export interface BoxProps
  extends Partial<BackgroundProps>,
    Partial<BorderProps>,
    Partial<LayoutProps>,
    Partial<PositionProps>,
    Partial<SpaceProps>,
    Partial<TypographyProps>,
    Partial<DisplayProps>,
    Partial<FlexboxProps>,
    Partial<GridProps>,
    Partial<Omit<HTMLAttributes<HTMLDivElement>, 'color'>> {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none'
  textDecoration?: 'underline'
  transform?: string
}