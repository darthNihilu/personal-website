import React from 'react'
import styled from 'styled-components'
import { DefaultText } from 'components/DefaultText'
import { workHistoryItems } from 'constants/constants'
import { Box } from 'components/Box'
import { WorkHistoryItem } from 'content/WorkHistory/components/WorkHistoryItem'
import { useTranslation } from 'react-multi-lang'

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
  const t = useTranslation()
  return (
    <Container id="workHistory">
      <DefaultText fontSize="32px" fontWeight="700" mb="40px">
        {t('workHistory')}
      </DefaultText>
      <WorkHistoryContainer>
        {workHistoryItems.map((item) => (
          <WorkHistoryItem {...item} />
        ))}
      </WorkHistoryContainer>
    </Container>
  )
}
