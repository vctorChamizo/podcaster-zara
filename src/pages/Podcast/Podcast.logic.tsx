import { Dispatch, SetStateAction } from "react"
import podcastService from "services/Podcast.service"
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from "utils/constants/storage.constants"
import Expirestorage from "utils/functions/storage.functions"
import { IFeedURLResponse, IPodcastDetail } from "utils/interfaces/podcast-detail.interface"
import { parse } from "rss-to-json"
import axios from "axios"

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

      const rss = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${response.results[0].feedUrl}`)
      // console.log(rss.data)

      // const _podcast: IPodcastDetail = response.results[0]
      // const _feedUrlReponse: IFeedURLResponse = JSON.parse(JSON.stringify(rss, null, 3))
      // const _feedUrlReponseParsed: IFeedURLResponse = _feedUrlReponse.console.log(response.results[0])
      // console.log(_feedUrlReponse)

      // const _podcastCompleted: IPodcastDetail = {
      //   ...podcast,
      //   feedUrlReponse: feedUrl
      // }

      // Expirestorage.setItem(EStorageItems.PODCAST_DETAILS + podcastId, JSON.stringify(_podcastCompleted), PODCASTS_EXPIRE_INTERVAL)

      // data.setPodcastDetail(_podcastCompleted)
    } catch (error) {
      console.error(`ERROR - Podcast ${data.podcastId} - ${error}`)
    } finally {
      data.setLoading(false)
    }
  }
}
