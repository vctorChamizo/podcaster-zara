export interface IPodcastDetailResponseProps {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  contentAdvisoryRating: string
  artworkUrl600: string
  genreIds: string[]
  genres: string[]
}
export interface IPodcastDetailResponse {
  results: IPodcastDetailResponseProps[]
  resultCount: number
}

export interface IEpisode {
  guid: string
  title: string
  author: string
  description: string
  duration: string
  link: string
  pubDate: string
}

export interface IPodcastDetail {
  id: string
  title: string
  author: string
  image: string
  description: string
  episodes: IEpisode[]
}
