import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import podcastService from "services/Podcast.service"
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from "utils/constants/storage.constants"
import storage from "utils/functions/storage.functions"
import { IPodcast } from "utils/interfaces/podcasts.interface"
import { HeaderContext } from "./HeaderProvider"

export interface IPodcastState {
  podcasts: IPodcast[]
}

export const PodcastContext = createContext<IPodcastState>({} as IPodcastState)

export const PodcastProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { setLoading } = useContext(HeaderContext)

  const [podcasts, setPodcasts] = useState([] as IPodcast[])

  const getPodcasts = async () => {
    try {
      const storageData = storage.getItem(EStorageItems.PODCASTS)

      if (storageData) return setPodcasts(JSON.parse(storageData))

      setLoading(true)
      const response = await podcastService.getPodcasts()
      storage.setItem(EStorageItems.PODCASTS, JSON.stringify(response.feed.entry), PODCASTS_EXPIRE_INTERVAL)
      setPodcasts(response.feed.entry)
    } catch (error) {
      console.error(`ERROR - Podcast list - ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPodcasts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = { podcasts }

  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
}
