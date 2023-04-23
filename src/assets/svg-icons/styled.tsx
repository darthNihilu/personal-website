import styled from 'styled-components'
import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  grid,
  layout,
  position,
  space,
  system,
  typography
} from 'styled-system'

import { SvgProps } from './types'

const transform = system({
  $transform: {
    property: 'transform'
  }
})

export const Svg = styled.svg<SvgProps>(
  compose(
    background,
    border,
    layout,
    position,
    space,
    color,
    typography,
    display,
    grid,
    flexbox,
    system,
    transform
  )
)
