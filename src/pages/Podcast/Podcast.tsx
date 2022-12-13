import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PodcastContext } from "providers/PodcastProvider"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import Layout from "ui/Layout/Layout"
import { PodcastContainer, PodcastListContainer, PodcastListSectionContainer } from "./Podcast.styled"
import DetailPodcastCard from "ui/components/Cards/DetailPodcastCard/DetailPodcastCard"
import Typography, { Types } from "ui/components/Typography/Typography"
import { COLORS } from "theme/colors"
import EpisodeList from "ui/components/EpisodeList/EpisodeList"
import { ROOT_ROUTES } from "utils/constants/route.constants"
import { PodcastLogic } from "./Podcast.logic"

const Podcast = () => {
  const navigate = useNavigate()
  const { podcastId } = useParams()

  const { setLoading } = useContext(PodcastContext)

  const [podcastDetail, setPodcastDetail] = useState<IPodcastDetail>()

  const handleOnClick = (episodeId: string) => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcastId}${ROOT_ROUTES.EPISODE}/${episodeId}`)
  }

  useEffect(() => {
    if (podcastId) PodcastLogic.getPodcastDetail({ podcastId, setPodcastDetail, setLoading })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId])

  return (
    <Layout>
      {podcastDetail && (
        <PodcastContainer>
          <DetailPodcastCard podcastDetail={podcastDetail} />
          <PodcastListContainer>
            <PodcastListSectionContainer>
              {/* // TODO */}
              <Typography type={Types.H2} color={COLORS.gray1000}>
                Episodes: {"0"}
              </Typography>
            </PodcastListSectionContainer>
            <PodcastListSectionContainer>
              {/* // TODO */}
              <EpisodeList onClick={handleOnClick} episodes={[]} />
            </PodcastListSectionContainer>
          </PodcastListContainer>
        </PodcastContainer>
      )}
    </Layout>
  )
}

export default Podcast
