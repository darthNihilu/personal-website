import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { DefaultText } from 'components/DefaultText'
import { THEME_TYPES } from 'components/Theme'
import { ThemeContext } from 'App'
import { Flex } from 'components/Flex'
import { SvgLink } from 'components/SvgLink'
import { WebsiteIcon } from 'assets/svg-icons/Icons/WebsiteIcon'
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

export const ErpPortfolio = () => {
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
            Sixhands ERP
          </DefaultText>
          <SvgLink
            component={WebsiteIcon}
            ml="16px"
            href="https://sixhands.co"
            title="Website"
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
          m="30px 0"
        />
        <DefaultText fontSize="22px" mt="16px" mb="12px" fontWeight={600}>
          An ERP system is a unified software platform that integrates diverse
          business processes, streamlining operations and enhancing data-driven
          decision-making across an organization.
        </DefaultText>
        <DefaultText>
          I participated in the development of such a project as an ERP system,
          which included primarily a Kanban task board that was divided into
          different Workspaces that each user could create to distribute tasks
          to specific projects. For the tasks themselves, it was possible to
          assign an executor and a verifier, add comments, photos or videos, set
          a priority and category, and set a deadline. There was also a user
          page which displayed a list of all the tasks that had been set for it,
          this page had filtering by all possible fields on the task with the
          filters being saved when the page was reloaded. There was a section
          with the user's daily reports, where each employee had to mark what he
          did for the day and on which project. There was a Leads section where
          advertisements from various freelance exchanges were delivered. It was
          possible to generate estimates and communicate with the customer
          through a single interface, also assigning managers to the taken
          projects. There were also sections with users, where it was possible
          to change all the data of a single user and a section with the
          Knowledge Base of the company, where the most important articles were
          located
        </DefaultText>
        <br />
        <DefaultText fontSize="16px">
          <FormatTextComponent text={t('erp.participated')} />
        </DefaultText>
        <br />
        <Separator mb="16px" mt="6px" />
        <DefaultText>
          Technologies used: React, Redux, SCSS, Styled-Components
        </DefaultText>
      </Box>
    </Container>
  )
}
