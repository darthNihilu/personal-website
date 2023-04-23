import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'App'
import { THEME_TYPES } from 'components/Theme'
import { DefaultText } from 'components/DefaultText'
import { Box } from 'components/Box'

const Container = styled(Box)`
  text-align: left;
`

export const GravisPortfolio = () => {
  const { switchTheme } = useContext(ThemeContext)

  useEffect(() => {
    switchTheme(THEME_TYPES.GRAVIS)
  }, [switchTheme])

  useEffect(() => {
    document.title = 'Andrei Zotov - Gravis Finance'
  }, [])

  return (
    <Container>
      <Box mt="50px">
        <DefaultText fontSize="32px" fontWeight={700}>
          Gravis Finance
        </DefaultText>
        <DefaultText variant="secondary">
          Gravis Finance is an ecosystem that unites DeFi platform, NFT
          marketplace for in-game assets, and Evervoid game. Participated in the
          development and integration of the DEX exchange. Creating a space game
          with inventory, ships, upgradable modules, lootboxes and drones based
          on NFT technology
        </DefaultText>
        <DefaultText>
          Completed tasks within the project: - Full participation in team
          development, following GitFlow methodology; - Global layout changes
          according to layouts in Figma; - Implementing logic via Redux, Web3
          and connecting smart contracts; - Integration with various crypto
          wallets; - Developing charts for exchange analytics; - Adding
          multilanguage system; - Working with SVG icons and their animations; -
          Using storybook for creating and testing uikit;
        </DefaultText>
      </Box>
    </Container>
  )
}
