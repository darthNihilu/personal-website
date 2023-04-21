import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/Flex'
import { DefaultText } from 'components/Text'

const Container = styled.div``

type Props = {
  title: string
  percentage: number
}

const PercentageContainer = styled.div`
  width: 100%;
  border: 0.5px solid #ffb400;
  border-radius: 30px;
  padding: 1px;
`

const Percentage = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  background-color: #ffb400;
  border-radius: 30px;
  height: 2px;
`

export const SkillItem: React.FC<Props> = ({ title, percentage }) => {
  return (
    <Container>
      <Flex justifyContent="space-between">
        <DefaultText fontSize="15px" variant="secondary">
          {title}
        </DefaultText>
        <DefaultText fontSize="15px" variant="secondary">
          {percentage}%
        </DefaultText>
      </Flex>
      <PercentageContainer>
        <Percentage percentage={percentage} />
      </PercentageContainer>
    </Container>
  )
}
