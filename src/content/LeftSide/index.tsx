import React from 'react'
import styled from 'styled-components'
import meImg from 'assets/images/me.jpg'
import { Flex } from 'components/Flex'
import { DefaultText } from 'components/Text'
import { Box } from 'components/Box'
import { SkillItem } from 'content/LeftSide/components/SkillItem'

const Container = styled(Flex)`
  width: 305px;
  background-color: #fff;
  height: 1315px;
  justify-content: flex-start;
  padding: 50px 40px;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
`

const TopContent = styled(Flex)`
  padding-bottom: 25px;
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

export const LeftSide = () => {
  return (
    <Container>
      <TopContent>
        <Image src={meImg} alt="" />
        <DefaultText mt="31px" fontSize="18px">
          Andrei Zotov
        </DefaultText>
        <DefaultText variant="secondary" fontSize="15px" mt="8px">
          Front-End Developer
        </DefaultText>
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
      </SkillItemContainer>
      <SkillItemContainer>
        <DefaultText fontSize="18px">Extra Skills</DefaultText>
      </SkillItemContainer>
    </Container>
  )
}
