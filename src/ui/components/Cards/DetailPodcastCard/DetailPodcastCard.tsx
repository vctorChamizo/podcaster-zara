import {
  DescriptionWrapper,
  DetailPodcastCardContainer,
  DetailPodcastCardImage,
  ParsedDescriptionText,
  TitleWrapper
} from "./DetailPodcastCard.styled"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import { COLORS } from "theme/colors"
import Typography, { Types } from "ui/components/Typography/Typography"

interface IPodcastDetailCardProps {
  podcastDetail: IPodcastDetail
}

const DetailPodcastCard: React.FC<IPodcastDetailCardProps> = ({ podcastDetail }) => {
  return (
    <DetailPodcastCardContainer>
      <DetailPodcastCardImage src={podcastDetail.artworkUrl600} />
      <TitleWrapper>
        <Typography color={COLORS.gray900}>{podcastDetail.collectionName}</Typography>
        <Typography type={Types.CAPTION}>by {podcastDetail.artistName}</Typography>
      </TitleWrapper>
      <DescriptionWrapper>
        <Typography color={COLORS.gray900}>Description:</Typography>
        {/* // TODO - podcast description */}
        <ParsedDescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula fringilla ligula quis blandit. Etiam quam eros, ultricies eu
          nunc eu, bibendum semper lacus.
        </ParsedDescriptionText>
      </DescriptionWrapper>
    </DetailPodcastCardContainer>
  )
}

export default DetailPodcastCard
