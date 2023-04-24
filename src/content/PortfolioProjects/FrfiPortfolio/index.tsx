import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { DefaultText } from 'components/DefaultText'
import { THEME_TYPES } from 'components/Theme'
import { ThemeContext } from 'App'
import { Flex } from 'components/Flex'
import { SvgLink } from 'components/SvgLink'
import { WebsiteIcon } from 'assets/svg-icons/Icons/WebsiteIcon'
import { GithubIcon } from 'assets/svg-icons/Icons/GithubIcon'
import { Separator } from 'components/Separator'
import frfiBackground from 'assets/images/portfolio-items/frfi1.png'
import frfiBackground2 from 'assets/images/portfolio-items/frfi2.png'
import frfiBackground3 from 'assets/images/portfolio-items/frfi3.png'
import frfiBackground4 from 'assets/images/portfolio-items/frfi4.png'
import frfiBackground5 from 'assets/images/portfolio-items/frfi5.png'
import frfiBackground6 from 'assets/images/portfolio-items/frfi6.png'
import frfiBackground7 from 'assets/images/portfolio-items/frfi7.png'
import { ImageSlider } from 'components/ImageSlider'
import { useTranslation } from 'react-multi-lang'
import { FormatTextComponent } from 'components/FormatTextComponent'

const Container = styled(Box)`
  margin-top: 50px;
`

export const FrfiPortfolio = () => {
  const { switchTheme } = useContext(ThemeContext)
  const t = useTranslation()
  useEffect(() => {
    switchTheme(THEME_TYPES.DEFAULT)
  }, [switchTheme])

  return (
    <Container>
      <Box mt="50px">
        <Flex alignItems="center">
          <DefaultText fontSize="32px" fontWeight={700}>
            FairFi
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
            frfiBackground,
            frfiBackground2,
            frfiBackground3,
            frfiBackground4,
            frfiBackground5,
            frfiBackground6,
            frfiBackground7
          ]}
        />
        <DefaultText fontSize="22px" mt="16px" mb="12px" fontWeight={600}>
          FairFi is a decentralized platform for investing in DeFi projects.
          Based on autofarming with Safe Farming conditions.
        </DefaultText>
        <DefaultText>
          Took part in the finalization of smart contracts based on the
          mechanism of auto-investment (autofarming) of user funds through a
          standard farming from different dexes. Created the system of creating
          conditions for Safe Farming mechanism, which provides withdrawal or
          deposit of user's funds depending on the price of one or another token
          and suggests the possibility of splitting the deposited LP token into
          two different ones. Also participated in creating a list of tokens
          with the ability to view the history of price changes and the
          implementation of AI token price prediction. Developed a system where
          user token balances were taken from different chains. Developed
          systems for approves and signatures to deposit any available user
          token into the desired pool, as well as calculating the price impact
          for the selected token.
        </DefaultText>
        <br />
        <DefaultText fontSize="16px">
          <FormatTextComponent text={t('frfi.participated')} />
        </DefaultText>
        <br />
        <Separator mb="16px" mt="6px" />
        <DefaultText>
          Technologies used: React, TypeScript, Redux, Redux-toolkit, Web3,
          Solidity Smart-Contracts, Jest, Cypress, Recharts
        </DefaultText>
      </Box>
    </Container>
  )
}
