import http from "./http-services/http"
import { API } from "utils/constants/api.constants"
import { IPodcastDetailResponse } from "utils/interfaces/podcast-detail.interface"
import { IPodcastResponse } from "utils/interfaces/podcasts.interface"

const podcastService = {
  getPodcasts: async (): Promise<IPodcastResponse> => {
    return http
      .GET({ path: API.PODCASTS })
      .then((response) => response as IPodcastResponse)
      .catch((error) => {
        throw error
      })
  },

  getPodcastDetails: async (podcastId: string): Promise<IPodcastDetailResponse> => {
    return http
      .GET({ path: API.PODCAST_DETAIL(podcastId) })
      .then((response) => response as IPodcastDetailResponse)
      .catch((error) => {
        throw error
      })
  }
}

export default podcastService
