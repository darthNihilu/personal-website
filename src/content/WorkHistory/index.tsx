import React from 'react'
import styled from 'styled-components'
import { DefaultText } from 'components/DefaultText'
import { Flex } from 'components/Flex'
import { portfolioItems, workHistoryItems } from 'constants/constants'
import { PortfolioItem } from 'content/Portfolio/components/PortfolioItem'
import { Box } from 'components/Box'
import { WorkHistoryItem } from 'content/WorkHistory/components/WorkHistoryItem'

const Container = styled(Box)`
  text-align: center;
  width: 100%;
`

const WorkHistoryContainer = styled(Box)`
  > div:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const WorkHistory = () => {
  return (
    <Container id="workHistory">
      <DefaultText fontSize="32px" fontWeight="700" mb="40px">
        Work history
      </DefaultText>
      <WorkHistoryContainer>
        {workHistoryItems.map((item) => (
          <WorkHistoryItem {...item} />
        ))}
      </WorkHistoryContainer>
    </Container>
  )
}
