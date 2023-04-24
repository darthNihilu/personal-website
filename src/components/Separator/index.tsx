import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { color } from 'styled-system'

const Container = styled(Box)`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  ${color}
`

export const Separator = ({ ...props }) => {
  return <Container {...props} />
}
