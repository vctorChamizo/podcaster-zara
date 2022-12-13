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
import ReactHtmlParser from "react-html-parser"

interface IPodcastDetailCardProps {
  podcastDetail: IPodcastDetail
  onClick?: () => void
}

const DetailPodcastCard: React.FC<IPodcastDetailCardProps> = ({ podcastDetail, onClick }) => {
  const handleOnClick = () => onClick && onClick()

  return (
    <DetailPodcastCardContainer>
      <DetailPodcastCardImage src={podcastDetail.image} onClick={handleOnClick} cursor={onClick && "pointer"} />
      <TitleWrapper onClick={handleOnClick} cursor={onClick && "pointer"}>
        <Typography color={COLORS.gray900} weight={Weights.SEMIBOLD}>
          {podcastDetail.title}
        </Typography>
        <Typography style={{ fontStyle: "italic" }} type={Types.CAPTION}>
          by {podcastDetail.author}
        </Typography>
      </TitleWrapper>
      <DescriptionWrapper>
        <Typography weight={Weights.SEMIBOLD} size={Sizes.XS} color={COLORS.gray900}>
          Description:
        </Typography>
        <DescriptionText style={{ fontStyle: "italic" }} size={Sizes.XS}>
          {ReactHtmlParser(podcastDetail.description)}
        </DescriptionText>
      </DescriptionWrapper>
    </DetailPodcastCardContainer>
  )
}

export default DetailPodcastCard
