import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PodcastContext } from "providers/PodcastProvider"
import { DescriptionText, EpisodeDetailContainer, EpisodeContainer, Audio } from "./Episode.styled"
import Layout from "ui/Layout/Layout"
import { COLORS } from "theme/colors"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import DetailPodcastCard from "ui/components/Cards/DetailPodcastCard/DetailPodcastCard"
import Typography, { Types } from "ui/components/Typography/Typography"
import { EpisodeLogic } from "./Episode.logic"
import { EPISODE } from "temp/episode.mock"
import { ROOT_ROUTES } from "utils/constants/route.constants"

const Episode = () => {
  const navigate = useNavigate()
  const { podcastId } = useParams()

  const { setLoading } = useContext(PodcastContext)

  const [podcastDetail, setPodcastDetail] = useState<IPodcastDetail>()

  const hanldeOnClick = () => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcastId}`)
  }

  useEffect(() => {
    if (podcastId) EpisodeLogic.getPodcastDetail({ podcastId, setPodcastDetail, setLoading })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId])

  return (
    <Layout>
      {podcastDetail && (
        <EpisodeContainer>
          <DetailPodcastCard podcastDetail={podcastDetail} onClick={hanldeOnClick} />
          <EpisodeDetailContainer>
            <Typography type={Types.H3} color={COLORS.gray1000}>
              {EPISODE.title}
            </Typography>
            {/* // TODO - podcast description */}
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula fringilla ligula quis blandit. Etiam quam eros,
              ultricies eu nunc eu, bibendum semper lacus.
            </DescriptionText>
            <Audio src={EPISODE.previewUrl} controls></Audio>
          </EpisodeDetailContainer>
        </EpisodeContainer>
      )}
    </Layout>
  )
}

export default Episode
