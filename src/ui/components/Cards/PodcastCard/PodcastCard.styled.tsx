import styled from "styled-components"
import { COLORS } from "theme/colors"

const PodcastCardImage = styled.img`
  width: 132px;
  height: 132px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: -40px;
  z-index: 2;
  cursor: pointer;
`

const PodcastCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
`

const PodcastCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 64px 16px 16px 16px;
  background-color: ${COLORS.white};
`

export { PodcastCardImage, PodcastCardContainer, PodcastCardTextWrapper }
