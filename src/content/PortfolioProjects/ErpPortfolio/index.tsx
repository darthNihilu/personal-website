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
import erpBackground from 'assets/images/portfolio-items/erp1.png'
import erpBackground2 from 'assets/images/portfolio-items/erp2.png'
import erpBackground3 from 'assets/images/portfolio-items/erp3.png'
import erpBackground4 from 'assets/images/portfolio-items/erp4.png'
import erpBackground5 from 'assets/images/portfolio-items/erp5.png'
import erpBackground6 from 'assets/images/portfolio-items/erp6.png'
import erpBackground7 from 'assets/images/portfolio-items/erp7.png'
import erpBackground8 from 'assets/images/portfolio-items/erp8.png'
import erpBackground9 from 'assets/images/portfolio-items/erp9.png'
import erpBackground10 from 'assets/images/portfolio-items/erp10.png'
import erpBackground11 from 'assets/images/portfolio-items/erp11.png'
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
            erpBackground,
            erpBackground2,
            erpBackground3,
            erpBackground4,
            erpBackground5,
            erpBackground6,
            erpBackground7,
            erpBackground8,
            erpBackground9,
            erpBackground10,
            erpBackground11
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
