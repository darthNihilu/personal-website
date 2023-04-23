import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { LeftSide } from 'content/LeftSide'
import { CenterSide } from 'content/CenterSide'
import { Portfolio } from 'content/Portfolio'
import { WorkHistory } from 'content/WorkHistory'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PORTFOLIO_KEYS, portfolioItemsByKey } from 'constants/constants'
import { DefaultText } from 'components/DefaultText'
import { FrfiPortfolio } from 'content/PortfolioProjects/FrfiPortfolio'
import { GravisPortfolio } from 'content/PortfolioProjects/GravisPortfolio'
import { RightSide } from 'content/RightSide'

const Container = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 30px;
  }
`

const AdditionalContainer = styled(Box)`
  width: 1250px;
`

const ScrollToTop = (): null => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export const TopContent = () => {
  return (
    <Container justifyContent="space-between" id="home">
      <LeftSide />
      <Flex flexDirection="column" alignItems="center" width="1250px" mb="60px">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CenterSide />
                <Box mt="70px">
                  <Portfolio />
                </Box>
                <Box mt="70px" width="100%">
                  <WorkHistory />
                </Box>
              </>
            }
          />
          <Route
            path={portfolioItemsByKey[PORTFOLIO_KEYS.FRFI].href}
            element={
              <AdditionalContainer>
                <FrfiPortfolio />
              </AdditionalContainer>
            }
          />
          <Route
            path={portfolioItemsByKey[PORTFOLIO_KEYS.GRAVIS].href}
            element={
              <AdditionalContainer>
                <GravisPortfolio />
              </AdditionalContainer>
            }
          />
        </Routes>
      </Flex>
      <RightSide />
    </Container>
  )
}
