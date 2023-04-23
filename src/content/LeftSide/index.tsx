import React from 'react'
import styled, { keyframes } from 'styled-components'
import meImg from 'assets/images/me.jpg'
import { Flex } from 'components/Flex'
import { DefaultText } from 'components/DefaultText'
import { Box } from 'components/Box'
import { SkillItem } from 'content/LeftSide/components/SkillItem'
import { useTranslation } from 'react-multi-lang'
import { SocialLinks } from 'content/LeftSide/components/SocialLinks'

const show = keyframes`
  from {
    left: -20%;
  }
  to {
    left: 0;
  }
`

const Container = styled(Flex)`
  min-width: 305px;
  background-color: ${({ theme }) => theme.additionBackgroundColor};
  height: 100%;
  justify-content: flex-start;
  padding: 50px 40px 20px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 12px 0;

  position: relative;

  animation: ${show} 1s ease-in-out forwards;
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

const SkillsText = styled(DefaultText).attrs((props) => ({
  variant: 'secondary',
  ...props
}))``

export const LeftSide = () => {
  const t = useTranslation()
  return (
    <Container>
      <TopContent>
        <Image src={meImg} alt="" />
        <DefaultText mt="31px" fontSize="18px" fontWeight="500">
          {t('name')}
        </DefaultText>
        <DefaultText variant="secondary" fontSize="15px" mt="8px">
          Front-End Developer
        </DefaultText>
        <Box mt="16px">
          <SocialLinks />
        </Box>
      </TopContent>
      <InfoContent>
        <Flex justifyContent="space-between">
          <TitleText fontSize="15px">Age:</TitleText>
          <DefaultText fontSize="15px">22</DefaultText>
        </Flex>
        <Flex justifyContent="space-between">
          <TitleText fontSize="15px">Residence:</TitleText>
          <DefaultText fontSize="15px">Russia</DefaultText>
        </Flex>
        <Flex justifyContent="space-between">
          <TitleText fontSize="15px">Freelance:</TitleText>
          <DefaultText fontSize="15px">Available</DefaultText>
        </Flex>
        <Flex justifyContent="space-between">
          <TitleText fontSize="15px">Current Location:</TitleText>
          <DefaultText fontSize="15px">Belgrade</DefaultText>
        </Flex>
      </InfoContent>
      <SkillItemContainer>
        <DefaultText fontSize="18px">Languages</DefaultText>
        <SkillItem title="Russian" percentage={100} />
        <SkillItem title="English" percentage={80} />
      </SkillItemContainer>
      <SkillItemContainer>
        <DefaultText fontSize="18px">Skills</DefaultText>
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
        <DefaultText fontSize="18px">Extra Skills</DefaultText>
        <SkillsText>Git/Github Actions/Gitlab CI</SkillsText>
        <SkillsText>Docker</SkillsText>
        <SkillsText>Nginx</SkillsText>
      </SkillItemContainer>
    </Container>
  )
}
