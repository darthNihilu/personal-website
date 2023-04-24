import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'App'
import { THEME_TYPES } from 'components/Theme'
import { DefaultText } from 'components/DefaultText'
import { Box } from 'components/Box'
import gravisBackground from 'assets/images/portfolio-items/gravis1.png'
import gravisBackground2 from 'assets/images/portfolio-items/gravis2.png'
import gravisBackground3 from 'assets/images/portfolio-items/gravis3.png'
import gravisBackground4 from 'assets/images/portfolio-items/gravis4.png'
import gravisBackground5 from 'assets/images/portfolio-items/gravis5.png'
import gravisBackground6 from 'assets/images/portfolio-items/gravis6.png'
import gravisBackground7 from 'assets/images/portfolio-items/gravis7.png'
import gravisBackground8 from 'assets/images/portfolio-items/gravis8.png'
import gravisBackground9 from 'assets/images/portfolio-items/gravis9.png'
import gravisBackground10 from 'assets/images/portfolio-items/gravis10.png'
import { SvgLink } from 'components/SvgLink'
import { GithubIcon } from 'assets/svg-icons/Icons/GithubIcon'
import { Flex } from 'components/Flex'
import { WebsiteIcon } from 'assets/svg-icons/Icons/WebsiteIcon'
import { ImageSlider } from 'components/ImageSlider'
import { Separator } from 'components/Separator'
import { useTranslation } from 'react-multi-lang'
import { FormatTextComponent } from 'components/FormatTextComponent'

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

  const t = useTranslation()

  return (
    <Container>
      <Box mt="50px">
        <Flex alignItems="center">
          <DefaultText fontSize="32px" fontWeight={700}>
            Gravis Finance
          </DefaultText>
          <SvgLink
            component={WebsiteIcon}
            ml="16px"
            href="https://gravis.finance"
            title="Website"
          />
          <SvgLink
            component={GithubIcon}
            ml="8px"
            href="https://github.com/gravis-finance"
            title="Github"
          />
        </Flex>
        <ImageSlider
          images={[
            gravisBackground,
            gravisBackground2,
            gravisBackground3,
            gravisBackground4,
            gravisBackground5,
            gravisBackground6,
            gravisBackground7,
            gravisBackground8,
            gravisBackground9,
            gravisBackground10
          ]}
          m="30px 0"
        />
        {/*<Image src={gravisBackground} alt="gravis" />*/}
        <DefaultText fontSize="22px" mt="16px" mb="12px" fontWeight={600}>
          Gravis Finance is an ecosystem that unites DeFi platform, NFT
          marketplace for in-game assets, and Evervoid game.
        </DefaultText>
        <DefaultText variant="secondary" fontSize="16px">
          Participated in the development and integration of the DEX exchange.
          Creating a space game with inventory, ships, upgradable modules,
          lootboxes and drones based on NFT technology.
        </DefaultText>
        <br />
        <DefaultText variant="secondary" fontSize="16px">
          <FormatTextComponent text={t('gravis.participated')} />
        </DefaultText>
        <br />
        <Separator
          mb="16px"
          mt="6px"
          backgroundColor="rgba(255, 255, 255, 0.1)"
        />
        <DefaultText variant="secondary" fontSize="16px">
          Technologies used: React, TypeScript, Redux, Redux-toolkit, Web3,
          Solidity Smart-Contracts, NFT algorithms
        </DefaultText>
      </Box>
    </Container>
  )
}
