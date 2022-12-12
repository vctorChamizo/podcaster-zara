import {
  DescriptionWrapper,
  DetailPodcastCardContainer,
  DetailPodcastCardImage,
  DescriptionText,
  TitleWrapper
} from "./DetailPodcastCard.styled"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import { COLORS } from "theme/colors"
import Typography, { Sizes, Types, Weights } from "ui/components/Typography/Typography"

// ! API (response uncompleted)
const PODCAST_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula fringilla ligula quis blandit. Etiam quam eros, ultricies eununc eu, bibendum semper lacus."

interface IPodcastDetailCardProps {
  podcastDetail: IPodcastDetail
  onClick?: () => void
}

const DetailPodcastCard: React.FC<IPodcastDetailCardProps> = ({ podcastDetail, onClick }) => {
  const handleOnClick = () => onClick && onClick()

  return (
    <DetailPodcastCardContainer>
      <DetailPodcastCardImage src={podcastDetail.artworkUrl600} onClick={handleOnClick} cursor={onClick && "pointer"} />
      <TitleWrapper onClick={handleOnClick} cursor={onClick && "pointer"}>
        <Typography color={COLORS.gray900} weight={Weights.SEMIBOLD}>
          {podcastDetail.collectionName}
        </Typography>
        <Typography style={{ fontStyle: "italic" }} type={Types.CAPTION}>
          by {podcastDetail.artistName}
        </Typography>
      </TitleWrapper>
      <DescriptionWrapper>
        <Typography weight={Weights.SEMIBOLD} size={Sizes.XS} color={COLORS.gray900}>
          Description:
        </Typography>
        <DescriptionText style={{ fontStyle: "italic" }} size={Sizes.XS}>
          {PODCAST_DESCRIPTION}
        </DescriptionText>
      </DescriptionWrapper>
    </DetailPodcastCardContainer>
  )
}

export default DetailPodcastCard
