import styled from "styled-components"
import { COLORS } from "theme/colors"
import Typography from "ui/components/Typography/Typography"

const EpisodeContainer = styled.div`
  display: flex;
  padding: 32px;
`

const EpisodeDetailContainer = styled.div`
  border: 1px solid ${COLORS.gray600};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  width: 100%;
  height: fit-content;
  margin-left: 64px;
`

const DescriptionTextWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
`

const DescriptionText = styled(Typography)`
  color: ${COLORS.gray800};
`

const Audio = styled.audio`
  width: 100%;
`

export { EpisodeContainer, EpisodeDetailContainer, DescriptionText, Audio, DescriptionTextWrapper }
