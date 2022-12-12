import styled from "styled-components"
import { COLORS } from "theme/colors"

type TitleWrapperProps = {
  cursor?: string
}

const DetailPodcastCardContainer = styled.article`
  width: 300px;
  padding: 24px;
  border: 1px solid ${COLORS.gray600};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: fit-content;
`

const DetailPodcastCardImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-bottom: 24px;
`

const TitleWrapper = styled.div<TitleWrapperProps>`
  padding: 12px 0px;
  border-top: 1px solid ${COLORS.gray600};
  cursor: ${({ cursor }) => cursor};
`

const DescriptionWrapper = styled.div`
  padding: 12px 0px;
  border-top: 1px solid ${COLORS.gray600};
`

const DescriptionText = styled.div`
  color: ${COLORS.gray800};
  font-size: 16px;
  margin-top: 4px;
`

export { DetailPodcastCardContainer, DetailPodcastCardImage, TitleWrapper, DescriptionWrapper, DescriptionText }
