import React from 'react'
import styled from 'styled-components'
import { WorkHistoryItemType } from 'constants/constants'
import { Box } from 'components/Box'
import { DefaultText } from 'components/DefaultText'
import { Flex } from 'components/Flex'
import { useTranslation } from 'react-multi-lang'

const Container = styled(Box)`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 40px;

  > div:first-child {
    @media screen and (max-width: 768px) {
      flex-direction: column;
      > div:first-child {
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        > div:first-child {
          text-align: center;
        }
      }
    }
  }
`

const FromToContainer = styled(DefaultText)`
  padding: 4px 4px;
  background-color: #ffb400;
  font-size: 13px;
  color: white;
  font-weight: 400;
  width: fit-content;
  line-height: 100%;
`

export const WorkHistoryItem: React.FC<WorkHistoryItemType> = ({
  title,
  site,
  company,
  description,
  fromTo
}) => {
  const t = useTranslation()
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <DefaultText fontSize="18px" fontWeight="500" textAlign="left">
            {title}
          </DefaultText>
          <FromToContainer fontSize="18px" fontWeight="500" mt="8px">
            {fromTo}
          </FromToContainer>
        </Flex>
        <Flex
          flexBasis="70%"
          alignItems="flex-start"
          flexDirection="column"
          textAlign="left"
        >
          <DefaultText
            fontSize="18px"
            fontWeight="500"
            alignSelf="flex-start"
            as="a"
            href={site}
            target="_blank"
          >
            {company}
          </DefaultText>
          <DefaultText
            fontSize="15px"
            fontWeight="500"
            alignSelf="flex-start"
            variant="secondary"
            mt="26px"
            // maxWidth="70%"
            textAlign="justify"
          >
            {t(`portfolioItems.${description}`)}
          </DefaultText>
        </Flex>
      </Flex>
    </Container>
  )
}
