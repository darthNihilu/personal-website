import React from 'react'
import styled, { keyframes } from 'styled-components'
import { DefaultText } from 'components/DefaultText'
import { Box } from 'components/Box'
import { PortfolioItem } from 'content/Portfolio/components/PortfolioItem'
import { portfolioItems } from 'constants/constants'
import { Flex } from 'components/Flex'
import { useTranslation } from 'react-multi-lang'

const show = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Container = styled(Box)`
  text-align: center;
  animation: ${show} 1s ease-in-out forwards;
  opacity: 0;
  animation-delay: 1s;
`

const PortfolioItemsContainer = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 1250px;
`

export const Portfolio = () => {
  const t = useTranslation()
  return (
    <Container id="portfolio">
      <DefaultText fontSize="32px" fontWeight="700" mb="40px">
        {t('portfolio')}
      </DefaultText>
      <Flex justifyContent="center" alignItems="center">
        <PortfolioItemsContainer>
          {portfolioItems.map((item) => (
            <PortfolioItem id={item.key} {...item} />
          ))}
        </PortfolioItemsContainer>
      </Flex>
    </Container>
  )
}
