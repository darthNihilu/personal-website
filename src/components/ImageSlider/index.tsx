import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChevronIcon } from 'assets/svg-icons/Icons/ChevronIcon'
import { Box } from 'components/Box'
import { SpaceProps } from 'styled-system'

const Container = styled(Box)`
  width: 100%;
  height: 720px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.additionBackgroundColor};
`

const ImageWrapper = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
`

const Arrow = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  user-select: none;

  ${Container}:hover & {
    opacity: 1;
  }
`

const LeftArrow = styled(Arrow)`
  left: 0;
`

const RightArrow = styled(Arrow)`
  right: 0;

  > svg {
    transform: rotate(180deg);
  }
`

export const ImageSlider: React.FC<{ images: string[] } & SpaceProps> = ({
  images,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }, [currentIndex, images.length])

  useEffect(() => {
    const autoSwitchInterval = setInterval(() => {
      nextImage()
    }, 5000)

    return () => {
      clearInterval(autoSwitchInterval)
    }
  }, [currentIndex, nextImage])

  return (
    <Container {...props}>
      <ImageWrapper currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Image src={image} key={index} />
        ))}
      </ImageWrapper>
      <LeftArrow onClick={prevImage}>
        <ChevronIcon width="48px" height="48px" />
      </LeftArrow>
      <RightArrow onClick={nextImage}>
        <ChevronIcon width="48px" height="48px" />
      </RightArrow>
    </Container>
  )
}
