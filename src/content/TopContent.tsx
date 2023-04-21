import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { LeftSide } from 'content/LeftSide'

const Container = styled(Flex)``

const CenterSide = styled(Box)`
  width: 970px;
  background-color: #fff;
  height: 467px;
`

const RightSide = styled(Box)`
  width: 108px;
  background-color: #fff;
  height: 1315px;
`

export const TopContent = () => {
  return (
    <Container justifyContent="space-between">
      <LeftSide />
      <CenterSide />
      <RightSide />
    </Container>
  )
}
