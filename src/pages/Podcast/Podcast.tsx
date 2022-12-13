import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import Layout from "ui/Layout/Layout"
import { PodcastContainer, PodcastListContainer, PodcastListSectionContainer } from "./Podcast.styled"
import DetailPodcastCard from "ui/components/Cards/DetailPodcastCard/DetailPodcastCard"
import Typography, { Types } from "ui/components/Typography/Typography"
import { COLORS } from "theme/colors"
import EpisodeList from "ui/components/EpisodeList/EpisodeList"
import { ROOT_ROUTES } from "utils/constants/route.constants"
import { PodcastLogic } from "./Podcast.logic"
import { HeaderContext } from "providers/HeaderProvider"

const Podcast = () => {
  const navigate = useNavigate()
  const { podcastId } = useParams()

  const { setLoading, setError } = useContext(HeaderContext)

  const [podcastDetail, setPodcastDetail] = useState<IPodcastDetail>()

  const handleOnClick = (episodeId: string) => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcastId}${ROOT_ROUTES.EPISODE}/${episodeId}`)
  }

  useEffect(() => {
    if (podcastId) PodcastLogic.getPodcastDetail({ podcastId, setPodcastDetail, setLoading, setError })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId])

  useEffect(() => {
    return () => setError(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      {podcastDetail && (
        <PodcastContainer>
          <DetailPodcastCard podcastDetail={podcastDetail} />
          <PodcastListContainer>
            <PodcastListSectionContainer>
              <Typography type={Types.H2} color={COLORS.gray1000}>
                Episodes: {podcastDetail.episodes?.length || 0}
              </Typography>
            </PodcastListSectionContainer>
            {podcastDetail?.episodes && (
              <PodcastListSectionContainer>
                <EpisodeList onClick={handleOnClick} episodes={podcastDetail.episodes} />
              </PodcastListSectionContainer>
            )}
          </PodcastListContainer>
        </PodcastContainer>
      )}
    </Layout>
  )
}

export default Podcast
