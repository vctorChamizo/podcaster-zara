import { Dispatch, SetStateAction } from "react"
import podcastService from "services/Podcast.service"
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from "utils/constants/storage.constants"
import Expirestorage from "utils/functions/storage.functions"
import { IPodcastDetail } from "utils/interfaces/podcast-detail.interface"

interface IGetPodcastDetail {
  podcastId: string
  setPodcastDetail: Dispatch<SetStateAction<IPodcastDetail | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const EpisodeLogic = {
  getPodcastDetail: async (data: IGetPodcastDetail) => {
    try {
      data.setLoading(true)

      const podcastId = data.podcastId

      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId)

      if (storageData) return data.setPodcastDetail(JSON.parse(storageData))

      const response = await podcastService.getPodcastDetails(podcastId)

      if (response.resultCount === 0) return

      Expirestorage.setItem(EStorageItems.PODCAST_DETAILS + podcastId, JSON.stringify(response.results[0]), PODCASTS_EXPIRE_INTERVAL)
      data.setPodcastDetail(response.results[0])
    } catch (error) {
      console.error(error)
    } finally {
      data.setLoading(false)
    }
  }
}
