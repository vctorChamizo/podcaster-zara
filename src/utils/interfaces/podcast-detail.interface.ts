export interface IPodcastDetailResponse {
  results: IPodcastDetail[]
  resultCount: number
}

type TMedia = {
  length: string
  type: string
  url: string
}

export interface IEpisode {
  guid: string
  author: string
  created: number
  description: string
  enclosures: TMedia[]
  itunes_duration: string
  published: number
  title: string
}

export interface IFeedURLResponse {
  description: string
  items: IEpisode[]
}

export interface IPodcastDetail {
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
  feedUrlReponse?: IFeedURLResponse
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
