import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PodcastContext } from "providers/PodcastProvider"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import Layout from "ui/Layout/Layout"
import { getPodcastDetail } from "./Podcast.service"
import { PodcastContainer, PodcastListContainer, PodcastListSectionContainer } from "./Podcast.styled"
import DetailPodcastCard from "ui/components/Cards/DetailPodcastCard/DetailPodcastCard"
import Typography, { Types } from "ui/components/Typography/Typography"
import { COLORS } from "theme/colors"
import { TRACKS } from "temp/track.mock"
import EpisodeList from "ui/components/EpisodeList/EpisodeList"
import { ROOT_ROUTES } from "utils/constants/route.constants"

const Podcast = () => {
  const navigate = useNavigate()
  const { podcastId } = useParams()

  const { setLoading } = useContext(PodcastContext)

  const [podcastDetail, setPodcastDetail] = useState<IPodcastDetail>()

  const handleOnClick = (episodeId: string) => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcastId}${ROOT_ROUTES.EPISODE}/${episodeId}`)
  }

  useEffect(() => {
    if (podcastId) getPodcastDetail({ podcastId, setPodcastDetail, setLoading })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId])

  return (
    <Layout>
      {podcastDetail && (
        <PodcastContainer>
          <DetailPodcastCard podcastDetail={podcastDetail} />
          <PodcastListContainer>
            <PodcastListSectionContainer>
              <Typography type={Types.H2} color={COLORS.gray1000}>
                Episodes: {TRACKS.length}
              </Typography>
            </PodcastListSectionContainer>
            <PodcastListSectionContainer>
              <EpisodeList onClick={handleOnClick} episodes={TRACKS} />
            </PodcastListSectionContainer>
          </PodcastListContainer>
        </PodcastContainer>
      )}
    </Layout>
  )
}

export default Podcast
