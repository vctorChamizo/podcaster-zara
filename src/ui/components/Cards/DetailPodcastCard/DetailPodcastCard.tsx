import {
  DescriptionWrapper,
  DetailPodcastCardContainer,
  DetailPodcastCardImage,
  DescriptionText,
  TitleWrapper
} from "./DetailPodcastCard.styled"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import { COLORS } from "theme/colors"
import Typography, { Types } from "ui/components/Typography/Typography"

interface IPodcastDetailCardProps {
  podcastDetail: IPodcastDetail
  onClick?: () => void
}

const DetailPodcastCard: React.FC<IPodcastDetailCardProps> = ({ podcastDetail, onClick }) => {
  const handleOnClick = () => onClick && onClick()

  return (
    <DetailPodcastCardContainer>
      <DetailPodcastCardImage src={podcastDetail.artworkUrl600} onClick={handleOnClick} />
      <TitleWrapper onClick={handleOnClick} cursor={onClick && "pointer"}>
        <Typography color={COLORS.gray900}>{podcastDetail.collectionName}</Typography>
        <Typography type={Types.CAPTION}>by {podcastDetail.artistName}</Typography>
      </TitleWrapper>
      <DescriptionWrapper>
        <Typography color={COLORS.gray900}>Description:</Typography>
        {/* // TODO - podcast description */}
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula fringilla ligula quis blandit. Etiam quam eros, ultricies eu
          nunc eu, bibendum semper lacus.
        </DescriptionText>
      </DescriptionWrapper>
    </DetailPodcastCardContainer>
  )
}

export default DetailPodcastCard
