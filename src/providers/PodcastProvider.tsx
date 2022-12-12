import { createContext, FC, PropsWithChildren, useEffect, useState } from "react"
import PodcastService from "services/Podcast.service"
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from "utils/constants/storage.constants"
import storage from "utils/functions/storage.functions"
import { IPodcast } from "utils/interfaces/podcasts.interface"

export interface IPodcastState {
  podcasts: IPodcast[]
}

export const PodcastContext = createContext<IPodcastState>({} as IPodcastState)

export const PodcastProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [podcasts, setPodcasts] = useState([] as IPodcast[])

  const revalidate = async () => {
    try {
      const storageData = storage.getItem(EStorageItems.PODCASTS)

      if (storageData) return setPodcasts(JSON.parse(storageData))

      const response = await PodcastService.getPodcasts()
      storage.setItem(EStorageItems.PODCASTS, JSON.stringify(response.feed.entry), PODCASTS_EXPIRE_INTERVAL)
      setPodcasts(response.feed.entry)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    revalidate()
  }, [])

  const value = { podcasts }

  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
}
