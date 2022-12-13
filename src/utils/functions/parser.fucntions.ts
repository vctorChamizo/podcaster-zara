import { IEpisode, IPodcastDetail, IPodcastDetailResponseProps } from "utils/interfaces/podcast-detail.interface"
import axios, { AxiosResponse } from "axios"

import { XMLParser } from "fast-xml-parser"
import { formatDurationByMs } from "./time.functions"

export const manageDuration = (duration?: number | string) => {
  if (!duration) return "-"
  if (typeof duration === "string") return duration
  return formatDurationByMs(duration)
}

export const parserEpisode = (items: any): IEpisode[] => {
  return items.map((_item): IEpisode => {
    const _guid = typeof _item.guid === "string" ? _item.guid : _item.guid["#text"]

    return {
      guid: _guid,
      title: _item.title,
      author: _item["itunes:author"],
      duration: manageDuration(_item["itunes:duration"]),
      pubDate: _item.pubDate,
      description: _item.description,
      link: _item.enclosure?.["@_url"] || ""
    }
  })
}

export const parserPodcast = (_podcast: IPodcastDetailResponseProps, description: string, episodes: IEpisode[]): IPodcastDetail => {
  return {
    id: _podcast?.artistId?.toString(),
    title: _podcast.collectionName,
    author: _podcast.artistName,
    image: _podcast.artworkUrl600,
    description,
    episodes
  }
}

export const parserResponse = async (url: string) => {
  const _rss: AxiosResponse = await axios.get(url)
  const parser = new XMLParser({ ignoreAttributes: false })
  const feedResponse = parser.parse(_rss.data)

  return feedResponse.rss.channel
}
