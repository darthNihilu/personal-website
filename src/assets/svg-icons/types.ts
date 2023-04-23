import { SVGAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { LayoutProps, SpaceProps } from 'styled-system'

// @ts-ignore: Prevent conflict cross types
export interface SvgProps
  extends SVGAttributes<HTMLOrSVGElement>,
    SpaceProps,
    LayoutProps {
  theme?: DefaultTheme
  spin?: boolean
  $transform?: string
}
