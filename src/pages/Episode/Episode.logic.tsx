import { Dispatch, SetStateAction } from "react"
import podcastService from "services/Podcast.service"
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from "utils/constants/storage.constants"
import { parserEpisode, parserPodcast, parserResponse } from "utils/functions/parser.fucntions"
import Expirestorage from "utils/functions/storage.functions"
import { IEpisode, IPodcastDetail } from "utils/interfaces/podcast-detail.interface"

interface IGetPodcastDetail {
  podcastId: string
  episodeId: string
  setPodcastDetail: Dispatch<SetStateAction<IPodcastDetail | undefined>>
  setEpisodeDetail: Dispatch<SetStateAction<IEpisode | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

const findEpisode = (id: string, episodes: IEpisode[]): IEpisode | undefined => {
  return episodes.find((episode) => {
    return episode.guid === id
  })
}

export const EpisodeLogic = {
  getPodcastDetail: async (data: IGetPodcastDetail) => {
    try {
      data.setLoading(true)

      const podcastId = data.podcastId

      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId)

      if (storageData) {
        const _podcastDetail = JSON.parse(storageData) as IPodcastDetail
        data.setPodcastDetail(_podcastDetail)
        const _episode = findEpisode(data.episodeId, _podcastDetail.episodes)
        data.setEpisodeDetail(_episode)
        return
      }

      const response = await podcastService.getPodcastDetails(podcastId)

      if (response.resultCount === 0) return

      const podcastResponse = response.results[0]

      const { description, item } = await parserResponse(response.results[0].feedUrl)

      const episodes = parserEpisode(item)
      const _podcast = parserPodcast(podcastResponse, description, episodes)

      Expirestorage.setItem(EStorageItems.PODCAST_DETAILS + podcastId, JSON.stringify(_podcast), PODCASTS_EXPIRE_INTERVAL)

      data.setPodcastDetail(_podcast)
      const _episode = findEpisode(data.episodeId, _podcast.episodes)
      data.setEpisodeDetail(_episode)
    } catch (error) {
      console.error(`ERROR - Podcast ${data.podcastId} - ${error}`)
    } finally {
      data.setLoading(false)
    }
  }
}
