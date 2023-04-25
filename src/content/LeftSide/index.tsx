import React from 'react'
import styled, { keyframes } from 'styled-components'
import meImg from 'assets/images/me.jpg'
import { Flex } from 'components/Flex'
import { DefaultText } from 'components/DefaultText'
import { Box } from 'components/Box'
import { SkillItem } from 'content/LeftSide/components/SkillItem'
import { useTranslation } from 'react-multi-lang'
import { SocialLinks } from 'content/LeftSide/components/SocialLinks'
import { Button } from 'components/Button'
import { PdfFile } from 'assets/svg-icons/Icons/PdfFile'

const show = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`

const Container = styled(Flex)<{ active?: boolean }>`
  min-width: 305px;
  max-width: 305px;
  background-color: ${({ theme }) => theme.additionBackgroundColor};
  height: fit-content;
  justify-content: flex-start;
  padding: 50px 40px 20px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 12px 0;
  overflow: auto;

  position: relative;

  animation: ${show} 1s ease-in-out forwards;

  @media screen and (max-width: 1315px) {
    max-width: 100%;
    transition: left 300ms ease-in-out;
    animation: none;
    position: absolute;
    z-index: 1;
    top: 80px;
    left: ${({ active }) => (active ? 0 : -100)}%;
    width: 100%;
    height: calc(100vh - 80px);
    padding-bottom: 20px;
  }
`

const Image = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
`

const TopContent = styled(Flex)`
  padding-bottom: 16px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

const InfoContent = styled(Box)`
  border-top: 1.5px solid #f0f0f6;
  border-bottom: 1.5px solid #f0f0f6;
  padding: 25px 0;
  width: 100%;

  > div {
    > div:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

const TitleText = styled(DefaultText)`
  background-color: #ffb400;
  padding: 1px 5px;
`

const SkillItemContainer = styled(InfoContent)`
  border-top: none;

  > div:not(:last-child) {
    margin-bottom: 8px;
  }
`

const MobileAdaptiveContent = styled(Box)`
  width: 100%;
  @media screen and (max-width: 1315px) and (min-width: 560px) {
    display: flex;
    > div {
      border: 0;
    }
    > div:not(:last-child) {
      padding-right: 32px;
      border-right: 1.5px solid #f0f0f6;
    }

    > div:last-child {
      padding-left: 32px;
    }
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: center;
`

const SkillsText = styled(DefaultText).attrs((props) => ({
  variant: 'secondary',
  ...props
}))``

export const LeftSide: React.FC<{ active?: boolean }> = ({ active }) => {
  const t = useTranslation()
  return (
    <Container active={active}>
      <TopContent>
        <Image src={meImg} alt="" />
        <DefaultText mt="31px" fontSize="18px" fontWeight="500">
          {t('name')}
        </DefaultText>
        <DefaultText variant="secondary" fontSize="15px" mt="8px">
          {t('frontEndDeveloper')}
        </DefaultText>
        <Box mt="16px">
          <SocialLinks />
        </Box>
      </TopContent>
      <MobileAdaptiveContent>
        <InfoContent>
          <Flex justifyContent="space-between">
            <TitleText fontSize="15px">{t('age')}:</TitleText>
            <DefaultText fontSize="15px">22</DefaultText>
          </Flex>
          <Flex justifyContent="space-between">
            <TitleText fontSize="15px">{t('residence')}:</TitleText>
            <DefaultText fontSize="15px">{t('russia')}</DefaultText>
          </Flex>
          {/*<Flex justifyContent="space-between">
            <TitleText fontSize="15px">Freelance:</TitleText>
            <DefaultText fontSize="15px">Available</DefaultText>
          </Flex>*/}
          <Flex justifyContent="space-between">
            <TitleText fontSize="15px">{t('currentLocation')}:</TitleText>
            <DefaultText fontSize="15px">{t('belgrade')}</DefaultText>
          </Flex>
        </InfoContent>
        <SkillItemContainer>
          <DefaultText fontSize="18px">{t('languages')}</DefaultText>
          <SkillItem title={t('russian')} percentage={100} />
          <SkillItem title={t('english')} percentage={80} />
        </SkillItemContainer>
      </MobileAdaptiveContent>
      <MobileAdaptiveContent mt="32px">
        <SkillItemContainer>
          <DefaultText fontSize="18px">{t('skills')}</DefaultText>
          <SkillsText>HTML/CSS/JS</SkillsText>
          <SkillsText>TypeScript</SkillsText>
          <SkillsText>React/Redux/Redux Saga</SkillsText>
          <SkillsText>Next.js</SkillsText>
          <SkillsText>Node.js</SkillsText>
          <SkillsText>Express</SkillsText>
          <SkillsText>NestJS</SkillsText>
          <SkillsText>Telegram API</SkillsText>
          <SkillsText>PostgreSQL</SkillsText>
          {/* <SkillItem title="HTML" percentage={90} />
        <SkillItem title="CSS" percentage={90} />
        <SkillItem title="JS" percentage={80} />
        <SkillItem title="React" percentage={80} />*/}
        </SkillItemContainer>
        <SkillItemContainer style={{ borderBottom: 'none' }}>
          <DefaultText fontSize="18px">{t('extraSkills')}</DefaultText>
          <SkillsText>Git/Github Actions/Gitlab CI</SkillsText>
          <SkillsText>Docker</SkillsText>
          <SkillsText>Nginx</SkillsText>
        </SkillItemContainer>
      </MobileAdaptiveContent>
      <a
        href="/Resume Andrei Zotov.pdf"
        target="_blank"
        style={{ textDecoration: 'none', width: '100%' }}
      >
        <StyledButton width="100%">
          <Flex alignItems="center">
            <DefaultText
              textTransform="uppercase"
              fontWeight="600"
              mr="12px"
              style={{ whiteSpace: 'pre' }}
            >
              {t('downloadResume')}
            </DefaultText>
            <PdfFile width="24px" height="24px" />
          </Flex>
        </StyledButton>
      </a>
    </Container>
  )
}
