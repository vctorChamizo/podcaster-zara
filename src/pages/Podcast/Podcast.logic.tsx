import { Dispatch, SetStateAction } from "react"
import podcastService from "services/Podcast.service"
import { EStorageItems } from "utils/constants/storage.constants"
import Expirestorage from "utils/functions/storage.functions"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import { parserEpisode, parserPodcast, parserResponse } from "utils/functions/parser.fucntions"

interface IGetPodcastDetail {
  podcastId: string
  setPodcastDetail: Dispatch<SetStateAction<IPodcastDetail | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const PodcastLogic = {
  getPodcastDetail: async (data: IGetPodcastDetail) => {
    try {
      data.setLoading(true)

      const podcastId = data.podcastId

      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId)

      if (storageData) return data.setPodcastDetail(JSON.parse(storageData))

      const response = await podcastService.getPodcastDetails(podcastId)

      if (response.resultCount === 0) return

      const podcastResponse = response.results[0]

      const { description, item } = await parserResponse(response.results[0].feedUrl)

      const episodes = parserEpisode(item)
      const _podcast = parserPodcast(podcastResponse, description, episodes)

      // Expirestorage.setItem(EStorageItems.PODCAST_DETAILS + podcastId, JSON.stringify(_podcastCompleted), PODCASTS_EXPIRE_INTERVAL)

      data.setPodcastDetail(_podcast)
    } catch (error) {
      console.error(`ERROR - Podcast ${data.podcastId} - ${error}`)
    } finally {
      data.setLoading(false)
    }
  }
}
