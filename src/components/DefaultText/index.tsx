import styled from 'styled-components'
import {
  border,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography
} from 'styled-system'

import { TextProps } from './types'
import { COLOR_VARIANTS } from 'components/DefaultText/variants'
import { ThemeType } from 'components/Theme'

const getFontSize = ({ fontSize, small }: TextProps) => {
  if (typeof fontSize !== 'string') return
  return small ? '14px' : fontSize || '16px'
}

const variantStyles = (
  theme: ThemeType,
  variant: COLOR_VARIANTS = COLOR_VARIANTS.PRIMARY
) => theme.text[variant]

export const DefaultText = styled.div<TextProps & { variant?: any }>`
  font-size: ${getFontSize};
  color: ${({ theme, variant }) => variantStyles(theme, variant)};
  ${({ color }) => (color ? `color: ${color};` : '')}
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  letter-spacing: -0.3px;
  ${({ textTransform }) =>
    textTransform &&
    `text-transform: ${textTransform};`} @media screen and(max-width: 768 px) {
    font-size: ${({ mobileSize }) => (mobileSize ? mobileSize + 'px' : '')};
  }
  ${space}
  ${typography}
${border}
${layout}
${position}
${flexbox}
${grid}
`

DefaultText.defaultProps = {
  small: false
}
