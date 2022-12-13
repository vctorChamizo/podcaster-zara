import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DescriptionText, EpisodeDetailContainer, EpisodeContainer, Audio, DescriptionTextWrapper } from "./Episode.styled"
import Layout from "ui/Layout/Layout"
import { COLORS } from "theme/colors"
import { IEpisode, IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import DetailPodcastCard from "ui/components/Cards/DetailPodcastCard/DetailPodcastCard"
import Typography, { Sizes, Types } from "ui/components/Typography/Typography"
import { EpisodeLogic } from "./Episode.logic"
import { ROOT_ROUTES } from "utils/constants/route.constants"
import ReactHtmlParser from "react-html-parser"
import { HeaderContext } from "providers/HeaderProvider"

const Episode = () => {
  const navigate = useNavigate()
  const { podcastId, episodeId } = useParams()

  const { setLoading } = useContext(HeaderContext)

  const [podcastDetail, setPodcastDetail] = useState<IPodcastDetail>()
  const [episodeDetail, setEpisodeDetail] = useState<IEpisode>()

  const hanldeOnClick = () => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcastId}`)
  }

  useEffect(() => {
    if (podcastId && episodeId) EpisodeLogic.getPodcastDetail({ podcastId, episodeId, setPodcastDetail, setEpisodeDetail, setLoading })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId, episodeId])

  return (
    <Layout>
      {podcastDetail && episodeDetail && (
        <EpisodeContainer>
          <DetailPodcastCard podcastDetail={podcastDetail} onClick={hanldeOnClick} />
          <EpisodeDetailContainer>
            <Typography type={Types.H3} color={COLORS.gray1000}>
              {episodeDetail.title}
            </Typography>
            <DescriptionTextWrapper>
              <DescriptionText size={Sizes.S} style={{ fontStyle: "italic" }}>
                {ReactHtmlParser(episodeDetail.description)}
              </DescriptionText>
            </DescriptionTextWrapper>

            <Audio src={episodeDetail.link} controls></Audio>
          </EpisodeDetailContainer>
        </EpisodeContainer>
      )}
    </Layout>
  )
}

export default Episode
