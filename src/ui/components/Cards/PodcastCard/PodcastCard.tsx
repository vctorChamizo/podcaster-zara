import { COLORS } from "theme/colors"
import Typography, { Weights } from "ui/components/Typography/Typography"
import { PodcastCardTextWrapper, PodcastCardImage, PodcastCardContainer } from "./PodcastCard.styled"

export type IPodcastCardProps = {
  image: string
  title: string
  author: string
  onClick: () => void
}

const PodcastCard: React.FC<IPodcastCardProps> = ({ image, title, author, onClick, ...props }) => {
  return (
    <PodcastCardContainer {...props}>
      <PodcastCardImage src={image} alt={title} onClick={onClick} />
      <PodcastCardTextWrapper onClick={onClick}>
        <Typography color={COLORS.gray1000} weight={Weights.REGULAR}>
          {title.toUpperCase()}
        </Typography>
        <Typography color={COLORS.gray800} weight={Weights.LIGHT}>
          Author: {author}
        </Typography>
      </PodcastCardTextWrapper>
    </PodcastCardContainer>
  )
}

export default PodcastCard
