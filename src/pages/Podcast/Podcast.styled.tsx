import styled from "styled-components"
import { COLORS } from "theme/colors"

const PodcastContainer = styled.div`
  display: flex;
  padding: 32px;
`

const PodcastListContainer = styled.div`
  margin-left: 64px;
  width: 100%;
`

const PodcastListSectionContainer = styled.div`
  border: 1px solid ${COLORS.gray600};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin-bottom: 24px;
`

export { PodcastContainer, PodcastListContainer, PodcastListSectionContainer }
