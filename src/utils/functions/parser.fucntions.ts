import { IEpisode, IPodcastDetail, IPodcastDetailResponseProps } from "utils/interfaces/podcast-detail.interface"
import axios, { AxiosResponse } from "axios"

import { XMLParser } from "fast-xml-parser"

export const parserEpisode = (items: any): IEpisode[] => {
  return items.map((_item): IEpisode => {
    return {
      guid: _item.guid["#text"],
      title: _item.title,
      author: _item["itunes:author"],
      duration: _item["itunes:duration"],
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
  const _url = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  const _rss: AxiosResponse = await axios.get(url)
  const parser = new XMLParser({ ignoreAttributes: false })
  const feedResponse = parser.parse(_rss.data)

  console.log(feedResponse)

  return feedResponse.rss.channel
}
